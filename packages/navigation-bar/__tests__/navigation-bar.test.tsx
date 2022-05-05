import React from 'react';
import { render } from '@testing-library/react';
import { NavigationBar, NavigationBarLink } from '../src';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

describe('@thoughtindustries/navigation-bar', () => {
  describe('NavigationBar', () => {
    it('should render', () => {
      const { container } = render(
        <NavigationBar>
          <NavigationBarLink label="Link 1">
            <NavigationBarLink.SubLink label="Sub link 1-1" href="/sublink-1-1" linkOpenInNewTab />
            <NavigationBarLink.SubLink label="Sub link 1-2" href="/sublink-1-2" />
          </NavigationBarLink>
          <NavigationBarLink label="Link 2" href="/link-2" linkOpenInNewTab />
          <NavigationBarLink label="Link 3">
            <NavigationBarLink.SubLink label="Sub link 3-1" href="/sublink-3-1" linkOpenInNewTab />
            <NavigationBarLink.SubLink label="Sub link 3-2" href="/sublink-3-2" />
          </NavigationBarLink>
          <NavigationBarLink label="Link 4" href="/link-4" />
        </NavigationBar>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none"
          >
            <div
              class="w-full relative pl-4 pr-4"
            >
              <nav
                class="flex flex-col border-b border-solid border-gray-300 overflow-hidden md:overflow-visible"
                role="navigation"
              >
                <div
                  class="py-1 flex flex-row justify-center md:hidden bg-white"
                >
                  <button
                    class="flex flex-row items-center gap-x-1 h-8 leading-8 transition-colors ease-in-out duration-200 uppercase text-base font-bold text-link-hover"
                  >
                    <span>
                      mobile-menu-button
                    </span>
                    <span
                      class="w-6 h-6"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6h16M4 12h16M4 18h16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <section
                  class="relative w-auto transition-all duration-300 hidden"
                  style="transform: translateX(-0%);"
                >
                  <ul
                    class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row"
                  >
                    <li
                      class="static md:relative bg-white px-4"
                    >
                      <button
                        class="font-semibold uppercase text-sm leading-6 flex items-center justify-between md:justify-start gap-x-2 text-accent hover:text-link-hover py-3 md:py-0 w-full"
                      >
                        Link 1
                        <span
                          class="w-3 h-3 text-link-hover"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                            />
                          </svg>
                        </span>
                      </button>
                      <ul
                        class="absolute top-0 md:top-auto left-full md:left-0 w-full md:w-auto z-50 border-none divide-y-none md:border md:border-solid md:border-black md:divide-y md:divide-black invisible"
                      >
                        <li
                          class="bg-white md:hidden"
                        >
                          <button
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-link-hover text-xs font-normal text-left"
                          >
                            mobile-back-button
                          </button>
                        </li>
                        <li
                          class="bg-white"
                        >
                          <a
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-accent md:text-link-hover hover:text-accent text-sm md:text-xs font-semibold md:font-normal uppercase"
                            href="/sublink-1-1"
                            target="_blank"
                          >
                            Sub link 1-1
                          </a>
                        </li>
                        <li
                          class="bg-white"
                        >
                          <a
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-accent md:text-link-hover hover:text-accent text-sm md:text-xs font-semibold md:font-normal uppercase"
                            href="/sublink-1-2"
                          >
                            Sub link 1-2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="static md:relative bg-white px-4"
                    >
                      <a
                        class="font-semibold uppercase text-sm leading-6 flex items-center justify-between md:justify-start gap-x-2 text-accent hover:text-link-hover py-3 md:py-0"
                        href="/link-2"
                        target="_blank"
                      >
                        Link 2
                      </a>
                    </li>
                    <li
                      class="static md:relative bg-white px-4"
                    >
                      <button
                        class="font-semibold uppercase text-sm leading-6 flex items-center justify-between md:justify-start gap-x-2 text-accent hover:text-link-hover py-3 md:py-0 w-full"
                      >
                        Link 3
                        <span
                          class="w-3 h-3 text-link-hover"
                        >
                          <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                            />
                          </svg>
                        </span>
                      </button>
                      <ul
                        class="absolute top-0 md:top-auto left-full md:left-0 w-full md:w-auto z-50 border-none divide-y-none md:border md:border-solid md:border-black md:divide-y md:divide-black invisible"
                      >
                        <li
                          class="bg-white md:hidden"
                        >
                          <button
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-link-hover text-xs font-normal text-left"
                          >
                            mobile-back-button
                          </button>
                        </li>
                        <li
                          class="bg-white"
                        >
                          <a
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-accent md:text-link-hover hover:text-accent text-sm md:text-xs font-semibold md:font-normal uppercase"
                            href="/sublink-3-1"
                            target="_blank"
                          >
                            Sub link 3-1
                          </a>
                        </li>
                        <li
                          class="bg-white"
                        >
                          <a
                            class="py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full text-accent md:text-link-hover hover:text-accent text-sm md:text-xs font-semibold md:font-normal uppercase"
                            href="/sublink-3-2"
                          >
                            Sub link 3-2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="static md:relative bg-white px-4"
                    >
                      <a
                        class="font-semibold uppercase text-sm leading-6 flex items-center justify-between md:justify-start gap-x-2 text-accent hover:text-link-hover py-3 md:py-0"
                        href="/link-4"
                      >
                        Link 4
                      </a>
                    </li>
                  </ul>
                </section>
              </nav>
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('NavigationBarLink', () => {
    it('should error when rendered without a parent <NavigationBar />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<NavigationBarLink label="Link 1" href="/link-1" />)).toThrowError();
      spy.mockRestore();
    });
  });
});
