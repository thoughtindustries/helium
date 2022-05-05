import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LearnerAccess, LearnerAccessProps } from '../src';

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
          class="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light"
        >
          <div
            class="border border-solid bg-gray-light"
          >
            <ul
              class="border-solid border-b border-gray-light bg-gradient-to-b from-white to-gray-lightest list-none m-0 p-0"
              role="tablist"
            >
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative bg-white border-activeTab-blue"
              >
                <button
                  aria-controls="access-section-0"
                  aria-selected="true"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover font-bold"
                  >
                    My learning
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative"
              >
                <button
                  aria-controls="access-section-1"
                  aria-selected="false"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover"
                  >
                    Events
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative"
              >
                <button
                  aria-controls="access-section-2"
                  aria-selected="false"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover"
                  >
                    Learning Paths
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative"
              >
                <button
                  aria-controls="access-section-3"
                  aria-selected="false"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover"
                  >
                    Completed
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative"
              >
                <button
                  aria-controls="access-section-4"
                  aria-selected="false"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover"
                  >
                    Archived
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
              <li
                class=" border-t-2 border-transparent border-solid inline-block text-sm py-4 px-8 relative"
              >
                <button
                  aria-controls="access-section-5"
                  aria-selected="false"
                  class="btn bg-none rounded-none h-auto p-0 shadow-none"
                  role="tab"
                >
                  <span
                    class=" inline-block hover:text-hover"
                  >
                    Certifications
                  </span>
                  <span
                    class="border border-solid border-gray-light text-xs font-bold rounded-lg bg-white inline-block leading-4 ml-1 py-0 px-1 text-center"
                  >
                    0
                  </span>
                </button>
              </li>
            </ul>
            <div
              class="inline-block"
            >
              <div
                class="top-2/4 left-1/2 mr-0 mb-0 -mt-5 -ml-16 absolute"
              >
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
          class="my-0 -mx-4 max-w-none w-auto py-4 px-8 text-slate-700 text-black-light"
        >
          <div
            class="border border-solid bg-gray-light"
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
              class="inline-block"
            >
              <div
                class="top-2/4 left-1/2 mr-0 mb-0 -mt-5 -ml-16 absolute"
              >
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
        </div>
      </div>
    `);
  });
});
