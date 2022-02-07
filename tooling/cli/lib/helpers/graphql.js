const fs = require('fs/promises');
const { gqlPluckFromCodeString } = require('@graphql-tools/graphql-tag-pluck');
const { filePathIsValid } = require('./filepaths');
const { parse, visit } = require('graphql/language');
const { print } = require('graphql/language/printer');
const crypto = require('crypto');

const gatherQuerySources = async filePaths => {
  let querySources = [];

  for (const filePath of filePaths) {
    if (filePathIsValid(filePath)) {
      const fileQuerySources = await gqlPluckFromCodeString(
        filePath,
        await fs.readFile(filePath, 'utf8')
      );

      querySources = querySources.concat(fileQuerySources);
    }
  }

  return querySources;
};

const buildFragmentMap = querySources => {
  const fragmentMap = {};

  for (const querySource of querySources) {
    visit(parse(querySource), {
      FragmentDefinition: {
        enter(node) {
          // Keep track of referenced fragment definitions. We'll need to add the
          // definitions to the Operation Docs so that query hashes match what Apollo generates
          fragmentMap[node.name.value] = node;
        }
      }
    });
  }

  return fragmentMap;
};

const transformDoc = (querySource, fragmentMap) => {
  return visit(parse(querySource), {
    Document: {
      enter(node) {
        for (const def of node.definitions) {
          if (def.kind === 'OperationDefinition') {
            const fragments = getAllFragmentSpreadsFromSelectionSet(def.selectionSet);

            if (fragments.length) {
              for (const fragment of fragments) {
                const fragmentExistsInMap = Object.prototype.hasOwnProperty.call(
                  fragmentMap,
                  fragment.name.value
                );

                if (fragmentExistsInMap) {
                  node.definitions.push(fragmentMap[fragment.name.value]);
                }
              }
            }
          }
        }
      }
    },
    SelectionSet: {
      enter(node, _key, parent) {
        // It's likely users won't always remember to add __typename to their
        // queries, so we'll add it for them here.
        if (parent && parent.kind === 'OperationDefinition') {
          return;
        }

        // No changes if no selections.
        const { selections } = node;
        if (!selections) {
          return;
        }

        // If selections already have a __typename, or are part of an
        // introspection query, do nothing.
        const skip = selections.some(selection => {
          return (
            selection.kind === 'Field' &&
            (selection.name.value === '__typename' ||
              selection.name.value.lastIndexOf('__', 0) === 0)
          );
        });

        if (skip) {
          return;
        }

        return {
          ...node,
          selections: [
            ...selections,
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: '__typename'
              }
            }
          ]
        };
      }
    }
  });
};

const getAllFragmentSpreadsFromSelectionSet = selectionSet => {
  const allFragments = [];

  selectionSet.selections.forEach(selection => {
    if (
      (selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
      selection.selectionSet
    ) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(frag =>
        allFragments.push(frag)
      );
    } else if (selection.kind === 'FragmentSpread') {
      allFragments.push(selection);
    }
  });

  return allFragments;
};

const hashQuery = querySource => {
  const query = print(querySource);
  const hash = crypto.createHash('sha256').update(query.trim()).digest('hex');
  return { hash, query };
};

module.exports = { gatherQuerySources, buildFragmentMap, transformDoc, hashQuery };
