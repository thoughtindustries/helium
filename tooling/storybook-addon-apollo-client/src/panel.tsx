import React, { Fragment, useEffect, useState } from 'react';
import { useParameter, useStorybookApi } from '@storybook/api';
import { STORY_CHANGED } from '@storybook/core-events';
import {
  Form as _Form,
  Placeholder as _Placeholder,
  SyntaxHighlighter as _SyntaxHighlighter,
  TabsState
} from '@storybook/components';
import { PARAM_KEY } from './constants';
import { MockedResponse, Parameters } from './types';
import { OperationDefinitionNode } from 'graphql';
import { print } from 'graphql';

const Form: {
  Field: React.FC<React.ComponentProps<typeof _Form.Field> & { children: React.ReactNode }>;
  Select: React.FC<React.ComponentProps<typeof _Form.Select> & { children: React.ReactNode }>;
} = _Form;
const Placeholder: React.FC<
  React.ComponentProps<typeof _Placeholder> & { children: React.ReactNode }
> = _Placeholder;
const SyntaxHighlighter: React.FC<
  React.ComponentProps<typeof _SyntaxHighlighter> & { children: React.ReactNode }
> = _SyntaxHighlighter;

const getOperationName = (mockedResponse: MockedResponse): string => {
  if (mockedResponse.request.operationName) {
    return mockedResponse.request.operationName;
  }

  const operationDefinition = mockedResponse.request.query.definitions.find(
    (definition): definition is OperationDefinitionNode => definition.kind === 'OperationDefinition'
  );

  if (operationDefinition && operationDefinition.name) {
    return operationDefinition.name.value;
  }

  return 'Unnamed';
};

export const ApolloClientPanel: React.FC = () => {
  const api = useStorybookApi();
  const { mocks = [] } = useParameter<Partial<Parameters>>(PARAM_KEY, {}) as Partial<Parameters>;
  const [activeMockIndex, setActiveMockIndex] = useState<number>(0);
  const onChange = () => setActiveMockIndex(0);

  useEffect(() => {
    api.on(STORY_CHANGED, onChange);
    return () => {
      api.off(STORY_CHANGED, onChange);
    };
  });

  if (mocks.length === 0) {
    return <Placeholder>No mocks for this story</Placeholder>;
  }

  const mockedResponse = mocks[activeMockIndex];
  const query = mockedResponse ? print(mockedResponse.request.query) : null;
  return (
    <Fragment key={activeMockIndex}>
      <Form.Field label="Mocks">
        <Form.Select
          value={activeMockIndex}
          onChange={event => setActiveMockIndex(Number(event.currentTarget.value))}
          size="auto"
        >
          {mocks.map((mock, index) => (
            <option key={index} value={index}>
              {index + 1}. {getOperationName(mock)}
            </option>
          ))}
        </Form.Select>
      </Form.Field>
      {mockedResponse && (
        <TabsState initial="request">
          <div key="request" id="request" title="Request">
            {query ? (
              <SyntaxHighlighter language="graphql" copyable bordered padded>
                {query}
              </SyntaxHighlighter>
            ) : (
              <Placeholder>Could not parse query</Placeholder>
            )}
          </div>
          <div key="variables" id="variables" title="Variables">
            <SyntaxHighlighter language="json" copyable bordered padded>
              {JSON.stringify(mockedResponse.request.variables, null, 2)}
            </SyntaxHighlighter>
          </div>
          <div key="context" id="context" title="Context">
            {mockedResponse.request.context ? (
              <SyntaxHighlighter language="json" copyable bordered padded>
                {JSON.stringify(mockedResponse.request.context, null, 2)}
              </SyntaxHighlighter>
            ) : (
              <Placeholder>No context in request</Placeholder>
            )}
          </div>
          <div key="result" id="result" title="Result">
            {mockedResponse.result ? (
              <SyntaxHighlighter language="json" copyable bordered padded>
                {JSON.stringify(mockedResponse.result, null, 2)}
              </SyntaxHighlighter>
            ) : (
              <Placeholder>No result in mockedResponse</Placeholder>
            )}
          </div>
          <div key="error" id="error" title="Error">
            {mockedResponse.error ? (
              <SyntaxHighlighter language="json" copyable bordered padded>
                {JSON.stringify(
                  mockedResponse.error,
                  Object.getOwnPropertyNames(mockedResponse.error),
                  2
                )}
              </SyntaxHighlighter>
            ) : (
              <Placeholder>No error in mockedResponse</Placeholder>
            )}
          </div>
        </TabsState>
      )}
    </Fragment>
  );
};
