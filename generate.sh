# Get package name
package=''
read -p 'Name of package: ' package

# Create init codegen file
> ./packages/$package/codegen.yml
echo 'overwrite: true
schema: "https://home.ti.test/helium"
generates:
  ./graphql.schema.json:
    plugins:
      - "introspection"' >> ./packages/$package/codegen.yml

# Install dependencies
npm i @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/near-operation-file-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo apollo -w ./packages/$package --save-dev
npm i @apollo/client graphql i18next -w ./packages/$package

# Run init codegen file
cd ./packages/$package/
NODE_TLS_REJECT_UNAUTHORIZED=0 graphql-codegen --config codegen.yml

# Create schema template
schema=''
read -p 'Name of schema: ' schema
echo 'Will you have mutations (y/n): '
read isMutation
> graphql-$schema.schema.json
if [[ $isMutation = 'y' ]]
then
  echo '{
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "Mutation"
      },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Mutation",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The `Boolean` scalar type represents `true` or `false`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        }
      ],
      "directives": [
        {
          "name": "deprecated",
          "description": "Marks an element of a GraphQL schema as no longer supported.",
          "isRepeatable": false,
          "locations": [
            "ARGUMENT_DEFINITION",
            "ENUM_VALUE",
            "FIELD_DEFINITION",
            "INPUT_FIELD_DEFINITION"
          ],
          "args": [
            {
              "name": "reason",
              "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": "\"No longer supported\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "include",
          "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
          "isRepeatable": false,
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Included when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "skip",
          "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
          "isRepeatable": false,
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Skipped when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "specifiedBy",
          "description": "Exposes a URL that specifies the behavior of this scalar.",
          "isRepeatable": false,
          "locations": [
            "SCALAR"
          ],
          "args": [
            {
              "name": "url",
              "description": "The URL that specifies the behavior of this scalar.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        }
      ]
    }
  }' >> graphql-$schema.schema.json
else
  echo '{
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The `Boolean` scalar type represents `true` or `false`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        }
      ],
      "directives": [
        {
          "name": "deprecated",
          "description": "Marks an element of a GraphQL schema as no longer supported.",
          "isRepeatable": false,
          "locations": [
            "ARGUMENT_DEFINITION",
            "ENUM_VALUE",
            "FIELD_DEFINITION",
            "INPUT_FIELD_DEFINITION"
          ],
          "args": [
            {
              "name": "reason",
              "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": "\"No longer supported\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "include",
          "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
          "isRepeatable": false,
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Included when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "skip",
          "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
          "isRepeatable": false,
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Skipped when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        },
        {
          "name": "specifiedBy",
          "description": "Exposes a URL that specifies the behavior of this scalar.",
          "isRepeatable": false,
          "locations": [
            "SCALAR"
          ],
          "args": [
            {
              "name": "url",
              "description": "The URL that specifies the behavior of this scalar.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ]
        }
      ]
    }
  }' >> graphql-$schema.schema.json
fi

# Delete general schema
rm graphql.schema.json

# Update codegen file
> codegen.yml
echo 'overwrite: true
schema: 'graphql-$schema.schema.json'
documents: 'src/**/*.graphql'
config:
  avoidOptionals: false
  maybeValue: T
  inlineFragmentTypes: 'combine'
  scalars:
    Slug: 'string'
    Date: 'string'
    JSON: 'JSON'
    AbsoluteOrRelativeURL: 'string'
    HexColor: 'string'
    RelativeURL: 'string'
    URL: 'string'
  strictScalars: true
generates:
  # use this to re-generate global types from schema
  src/graphql/global-types.ts:
    plugins:
      - 'typescript'
  src/:
    preset: near-operation-file
    presetConfig:
      # use a reduced global types scoped for content
      baseTypesPath: graphql/global-types.ts
      extension: .generated.tsx
    plugins:
      - 'typescript-operations'
      - 'typescript-react-apollo'' >> codegen.yml

# Create graphql directory
mkdir src/
cd src/
> index.ts
echo 'export * from '"'"'./graphql'"'"';' >> index.ts
mkdir graphql
cd graphql
if [[ $isMutation = 'y' ]]
then

# Queries directory
mkdir queries
cd queries
> Query.graphql
echo 'query Query {
  id
}' >> Query.graphql
> index.ts
cd ..
> index.ts
echo 'export * from '"'"'./queries'"'"';
export * from '"'"'./mutations'"'"';' >> index.ts

# Mutations directory
mkdir mutations
cd mutations
> Mutation.graphql
echo 'mutation Mutation {
  id
}' >> Mutation.graphql
> index.ts
cd ../../../
else 
> Query.graphql
echo 'query Query {
  id
}' >> Query.graphql
> index.ts
cd ../../
fi

# Create graphql code
graphql-codegen --config codegen.yml

if [[ $isMutation = 'y' ]]
then
  # Export queries
  cd src/graphql/queries
  echo 'export * from '"'"'./Query.generated'"'"';' >> index.ts
  # Export mutations
  cd ../mutations
  echo 'export * from '"'"'./Mutation.generated'"'"';' >> index.ts
else
  # Export queries
  cd src/graphql
  echo 'export * from '"'"'./Query.generated'"'"';' >> index.ts
fi