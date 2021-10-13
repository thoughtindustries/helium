import React from "react";
import { render } from "@testing-library/react";
import { LinkLists } from "..";
import {
  LinkListsCategory,
  LinkListsSubCategory,
  LinkListsProps,
} from "../types";

const getCategories = (
  number: number,
  numberOfSubcategories: number,
  openLinkInNewTab: boolean = false
): LinkListsCategory[] => {
  const items: LinkListsCategory[] = [];
  for (let i = 0; i < number; i++) {
    items.push({
      label: `List category ${i + 1}`,
      subcategories: getSubcategories(numberOfSubcategories, openLinkInNewTab),
    });
  }
  return items;
};

const getSubcategories = (
  number: number,
  openLinkInNewTab: boolean = false
): LinkListsSubCategory[] => {
  const items: LinkListsSubCategory[] = [];
  for (let i = 0; i < number; i++) {
    items.push({
      label: `List subcategory ${i + 1}`,
      href: `/subcategory-link${i + 1}`,
      linkOpenInNewTab: openLinkInNewTab,
    });
  }
  return items;
};

const setupProps = (
  displayCutoff: number,
  numberOfCategories: number,
  numberOfSubcategories: number,
  openLinkInNewTab: boolean = false
): LinkListsProps => ({
  title: "Link lists text",
  displayCutoff,
  categories: getCategories(
    numberOfCategories,
    numberOfSubcategories,
    openLinkInNewTab
  ),
});

describe("@thoughtindustries/link-lists", () => {
  it("should render", () => {
    const props: LinkListsProps = setupProps(2, 4, 3, true);
    const { container } = render(<LinkLists {...props} />);
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
              Link lists text
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
                    List category 1
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
                        target="_blank"
                      >
                        List subcategory 1
                      </a>
                    </li>
                    <li
                      class="pl-5 before:content-['\\\\2022\\\\20']"
                    >
                      <a
                        class="text-sm text-link underline"
                        href="/subcategory-link2"
                        target="_blank"
                      >
                        List subcategory 2
                      </a>
                    </li>
                  </ul>
                  <button
                    class="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow"
                  >
                    <svg
                      aria-label="expand"
                      class="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block"
                      fill="currentColor"
                      height="15"
                      viewBox="0 0 20 20"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="ml-1"
                    >
                      more
                    </span>
                  </button>
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
                    List category 2
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
                        target="_blank"
                      >
                        List subcategory 1
                      </a>
                    </li>
                    <li
                      class="pl-5 before:content-['\\\\2022\\\\20']"
                    >
                      <a
                        class="text-sm text-link underline"
                        href="/subcategory-link2"
                        target="_blank"
                      >
                        List subcategory 2
                      </a>
                    </li>
                  </ul>
                  <button
                    class="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow"
                  >
                    <svg
                      aria-label="expand"
                      class="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block"
                      fill="currentColor"
                      height="15"
                      viewBox="0 0 20 20"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="ml-1"
                    >
                      more
                    </span>
                  </button>
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
                    List category 3
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
                        target="_blank"
                      >
                        List subcategory 1
                      </a>
                    </li>
                    <li
                      class="pl-5 before:content-['\\\\2022\\\\20']"
                    >
                      <a
                        class="text-sm text-link underline"
                        href="/subcategory-link2"
                        target="_blank"
                      >
                        List subcategory 2
                      </a>
                    </li>
                  </ul>
                  <button
                    class="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow"
                  >
                    <svg
                      aria-label="expand"
                      class="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block"
                      fill="currentColor"
                      height="15"
                      viewBox="0 0 20 20"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="ml-1"
                    >
                      more
                    </span>
                  </button>
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
                    List category 4
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
                        target="_blank"
                      >
                        List subcategory 1
                      </a>
                    </li>
                    <li
                      class="pl-5 before:content-['\\\\2022\\\\20']"
                    >
                      <a
                        class="text-sm text-link underline"
                        href="/subcategory-link2"
                        target="_blank"
                      >
                        List subcategory 2
                      </a>
                    </li>
                  </ul>
                  <button
                    class="border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow"
                  >
                    <svg
                      aria-label="expand"
                      class="leading-none text-xs border border-solid border-gray-300 pr-0 inline-block"
                      fill="currentColor"
                      height="15"
                      viewBox="0 0 20 20"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <span
                      class="ml-1"
                    >
                      more
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `);
  });
});
