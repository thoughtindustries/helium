import React from 'react';
import { render } from '@testing-library/react';
import { Pagination, PaginationProps } from '../src';

describe('@thoughtindustries/pagination', () => {
  describe('Pagination', () => {
    it('should render', async () => {
      const getPageLink: PaginationProps['getPageLink'] = page => `/sample?page=${page}`;

      const { container } = render(<Pagination getPageLink={getPageLink} total={100} />);
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="mx-2 my-4 flex flex-wrap-reverse items-center justify-between"
          >
            <div
              class="mt-2 flex items-center justify-start"
            >
              <span>
                Showing
                <strong>
                   1-50 
                </strong>
                of
                <strong>
                   100 items
                </strong>
              </span>
            </div>
            <div
              class="mt-2 flex items-center justify-end"
            >
              <div
                class="flex justify-center"
              >
                <a
                  aria-label="rewind"
                  class="w-7 h-7 border border-solid flex items-center justify-center p-1 rounded rounded-r-none border-r-0 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                  href="/sample?page=1"
                >
                  <svg
                    class="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </a>
                <a
                  aria-label="navigateleft"
                  class="w-7 h-7 border border-solid flex items-center justify-center p-1 rounded rounded-l-none border-r-1 mr-2 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                  href="/sample?page=0"
                >
                  <svg
                    class="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </a>
                <a
                  class="w-7 h-7 border border-solid flex items-center justify-center p-1 rounded border-l-1 border-r-0 rounded-r-none cursor-default pointer-events-none bg-accent border-accent text-accent-contrast"
                  href="/sample?page=1"
                >
                  1
                </a>
                <a
                  class="w-7 h-7 border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-r-1 border-l-0 rounded-l-none text-gray-600"
                  href="/sample?page=2"
                >
                  2
                </a>
                <a
                  aria-label="navigateright"
                  class="w-7 h-7 border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 ml-2 text-gray-600"
                  href="/sample?page=2"
                >
                  <svg
                    class="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </a>
                <a
                  aria-label="fastforward"
                  class="w-7 h-7 border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 text-gray-600"
                  href="/sample?page=2"
                >
                  <svg
                    class="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
