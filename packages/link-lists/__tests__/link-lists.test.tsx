import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LinkLists, LinkList } from '../src';

describe('@thoughtindustries/link-lists', () => {
  describe('LinkLists', () => {
    it('should render', () => {
      const { container } = render(
        <LinkLists title="Title text">
          <LinkList label="Category 1">
            <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
          </LinkList>
          <LinkList label="Category 2">
            <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
          </LinkList>
        </LinkLists>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none"
          >
            <div
              class="w-full relative pl-4 pr-4 float-left"
            >
              <h2
                class="text-2xl text-center text-gray-700 mb-4 font-header"
              >
                Title text
              </h2>
              <ul
                class="grid grid-cols-2 md:grid-cols-3 gap-x-8"
              >
                <li
                  class="mb-4"
                >
                  <div
                    class="border-r"
                  >
                    <h4
                      class="text-sm font-bold"
                    >
                      Category 1
                    </h4>
                    <ul
                      class="m-0 p-0 list-none"
                    >
                      <li
                        class="pl-5 before:content-['\\\\2022\\\\20']"
                      >
                        <a
                          class="text-sm text-link underline"
                          href="/subcategory-link1"
                        >
                          List subcategory 1
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="mb-4"
                >
                  <div
                    class="border-r"
                  >
                    <h4
                      class="text-sm font-bold"
                    >
                      Category 2
                    </h4>
                    <ul
                      class="m-0 p-0 list-none"
                    >
                      <li
                        class="pl-5 before:content-['\\\\2022\\\\20']"
                      >
                        <a
                          class="text-sm text-link underline"
                          href="/subcategory-link1"
                        >
                          List subcategory 1
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('LinkList', () => {
    it('should error when rendered without a parent <LinkList />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<LinkList.Link href="/">Link</LinkList.Link>)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <LinkList label="Category 1">
          <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        </LinkList>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <li
            class="mb-4"
          >
            <div
              class="border-r"
            >
              <h4
                class="text-sm font-bold"
              >
                Category 1
              </h4>
              <ul
                class="m-0 p-0 list-none"
              >
                <li
                  class="pl-5 before:content-['\\\\2022\\\\20']"
                >
                  <a
                    class="text-sm text-link underline"
                    href="/subcategory-link1"
                  >
                    List subcategory 1
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      `);
    });

    it('should display list cutoff and interact with expand button', () => {
      const { queryByText, getByText, queryByRole, getByRole } = render(
        <LinkList label="Category 1" displayCutoff={1}>
          <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
          <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        </LinkList>
      );
      expect(queryByText('List subcategory 2')).not.toBeInTheDocument();
      const expandBtn = getByRole('button');

      fireEvent.click(expandBtn);
      getByText('List subcategory 2');
      expect(queryByRole('button')).not.toBeInTheDocument();
    });
  });
});
