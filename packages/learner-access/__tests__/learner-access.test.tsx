import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LearnerAccess, LearnerAccessProps } from '../src';
import {
  LoadBookmarks,
  LoadUserLearning,
  LoadWaitlist,
  LoadArchivedContent,
  LoadCertificates
} from '../src/components';

// TODO: add apollo mocks
const apolloMock: any = [];

describe('@thoughtindustries/learner-access', () => {
  it('should render as non collapsible', () => {
    const props: LearnerAccessProps = {
      allowCollapse: false,
      allowContentArchive: false,
      classNames: '',
      collapseDefault: false,
      displayExpiredCertificateInformation: false
    };
    const { container } = render(
      <MockedProvider mocks={[...apolloMock]} addTypename={false}>
        <LearnerAccess {...props} />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm"
        >
          <div
            class="border border-solid"
          >
            <ul
              class="border-solid border-gray-light bg-gradient-to-b from-white to-gray-lightest list-none m-0 p-0"
              role="tablist"
            />
            <div
              class="flex items-center justify-center space-x-10"
            >
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.32s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.16s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('should render as collapsible', () => {
    const props: LearnerAccessProps = {
      allowCollapse: true,
      allowContentArchive: false,
      classNames: '',
      collapseDefault: false,
      displayExpiredCertificateInformation: false
    };
    const { container } = render(
      <MockedProvider mocks={[...apolloMock]} addTypename={false}>
        <LearnerAccess {...props} />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light text-sm"
        >
          <div
            class="border border-solid"
          >
            <div
              class="border-b border-solid leading-5 p-4 bg-gradient-to-t from-white to-gray-lightest"
            >
              <button
                class="border-gray-300 leading-3 border-solid border h-5 text-center mr-2 w-5"
              >
                <i
                  aria-label="expand"
                  class="icon-plus text-xl font-thin leading-3 not-italic"
                >
                  +
                </i>
              </button>
              <span>
                <span
                  class="text-base"
                >
                  Activity
                </span>
              </span>
            </div>
            
            <div
              class="flex items-center justify-center space-x-10"
            >
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.32s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.16s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('should render bookmarks tab', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <LoadBookmarks />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex items-center justify-center space-x-10"
        >
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.32s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.16s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
          />
        </div>
      </div>
    `);
  });

  it('should render User learning tab', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <LoadUserLearning />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex items-center justify-center space-x-10"
        >
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.32s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.16s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
          />
        </div>
      </div>
    `);
  });

  it('should render Waitlist tab', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <LoadWaitlist />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex items-center justify-center space-x-10"
        >
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.32s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.16s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
          />
        </div>
      </div>
    `);
  });

  it('should render Archive content tab', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <LoadArchivedContent />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex items-center justify-center space-x-10"
        >
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.32s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.16s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
          />
        </div>
      </div>
    `);
  });

  it('should render Certificates tab', () => {
    const { container } = render(
      <MockedProvider addTypename={false}>
        <LoadCertificates />
      </MockedProvider>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex items-center justify-center space-x-10"
        >
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.32s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
            style="animation-delay: -0.16s;"
          />
          <div
            class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
          />
        </div>
      </div>
    `);
  });
});
