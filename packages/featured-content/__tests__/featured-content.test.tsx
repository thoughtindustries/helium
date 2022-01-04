import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  FeaturedContent,
  SidebarPosition,
  SidebarRss,
  SidebarDefault,
  ContentTileStandardLayout,
  ContentTileDescriptiveLayout,
  ContentMultiCarousel,
  ContentCarousel,
  ContentTileImageOverlay
} from '../src';
import { RSS_ITEMS_QUERY } from '../src/core/graphql/RssItemsQuery';

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

const headerOptions = {
  title: 'Feature Content Header'
};

const mockItems = {
  manual: {
    title: 'Manual item',
    description: 'description',
    href: '/',
    isActive: true
  },
  dynamic: {
    title: 'Dynamic item',
    courseStartDate: new Date(2020, 0, 1),
    contentTypeLabel: 'Course',
    source: 'Test source',
    authors: ['Test Author'],
    description: 'description',
    href: '/',
    isCompleted: true,
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
    canAddToQueue: true,
    isActive: true,
    callToAction: 'View Details',
    ribbon: {
      color: '#39ad39',
      contrastColor: '#fff',
      darkerColor: '#2c872c',
      label: 'Test ribbon',
      slug: 'test-ribbon'
    },
    rating: 36,
    hasAvailability: false,
    priceInCents: 6500,
    suggestedRetailPriceInCents: 8000
  }
};

const mockFeedUrl = 'https://foo/bar';
const mockApolloResults = {
  sidebarRss: {
    request: {
      query: RSS_ITEMS_QUERY,
      variables: {
        feedUrl: mockFeedUrl
      }
    },
    result: {
      data: {
        RssItems: [
          { title: 'Link 1', link: '/rss-link1' },
          { title: 'Link 2', link: '/rss-link2' },
          { title: 'Link 3', link: '/rss-link3' }
        ]
      }
    }
  }
};

const handleAddedToQueue = (): Promise<void> => {
  return Promise.resolve();
};

describe('@thoughtindustries/featured-content', () => {
  describe('FeaturedContent', () => {
    it('should render', () => {
      const { container } = render(
        <FeaturedContent>
          <ContentTileStandardLayout
            headerOptions={headerOptions}
            desktopColumnCount={3}
            onAddedToQueue={handleAddedToQueue}
          >
            <ContentTileStandardLayout.Item {...mockItems.dynamic} />
            <ContentTileStandardLayout.Item {...mockItems.manual} />
            <ContentTileStandardLayout.Item {...mockItems.manual} />
            <ContentTileStandardLayout.Item {...mockItems.manual} />
          </ContentTileStandardLayout>
        </FeaturedContent>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none"
          >
            <div
              class="w-full relative pl-4 pr-4 float-left grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div
                class="md:col-span-full"
              >
                <div>
                  <h3>
                    Feature Content Header
                  </h3>
                </div>
                <hr
                  class="relative my-4"
                />
                <ul
                  class="grid gap-5 grid-cols-1 md:grid-cols-3"
                >
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 -top-1 whitespace-no-wrap -right-2"
                          style="color: rgb(255, 255, 255); background-color: rgb(57, 173, 57);"
                        >
                          <div
                            class="right-0 block border-4 border-solid h-0 w-0 absolute border-transparent top-full"
                            style="border-top-color: #2c872c; border-left-color: #2c872c;"
                          />
                          Test ribbon
                        </div>
                        <div
                          class="relative"
                        >
                          <div
                            class="block absolute h-full left-0 top-0 w-full text-center bg-white bg-opacity-80 z-1"
                          >
                            <div
                              class="absolute w-full top-1/2 transform -translate-y-1/2"
                            >
                              <div>
                                <i
                                  aria-label="Completed"
                                  class="bg-white text-3xl inline-block p-4 rounded-full border-4 border-solid border-white border-opacity-50 my-0 mx-auto bg-clip-padding"
                                >
                                  <svg
                                    fill="#5bb65c"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    width="30"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                                    />
                                  </svg>
                                </i>
                              </div>
                              <p
                                class="mt-1 text-base"
                              >
                                course-completed-decal
                              </p>
                            </div>
                          </div>
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Dynamic item
                            <br />
                            <span
                              class="text-xs text-gray-700"
                            >
                              01/01/2020
                            </span>
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          >
                            <strong>
                              Course
                            </strong>
                            |
                            Test source
                          </div>
                          <p
                            class="text-xs mb-1 text-gray-700"
                          >
                            Test Author
                          </p>
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <div>
                            <span
                              class="text-accent"
                            >
                              ★
                            </span>
                            <span
                              class="text-accent"
                            >
                              ★
                            </span>
                            <span
                              class="text-accent"
                            >
                              ☆
                            </span>
                            <span
                              class="text-accent"
                            >
                              ☆
                            </span>
                            <span
                              class="text-accent"
                            >
                              ☆
                            </span>
                          </div>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <div
                              class="flex flex-wrap-reverse justify-between items-end"
                            >
                              <span>
                                <button
                                  class="inline-block pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer inline-block font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover"
                                >
                                  <span
                                    class="inline-block align-top"
                                  >
                                    <i
                                      aria-label="plus"
                                      class="-top-px pr-0 relative text-xs not-italic before:content-['\\\\002B']"
                                    />
                                     
                                    course-add-to-queue
                                  </span>
                                </button>
                              </span>
                              <span>
                                <span
                                  class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                                >
                                  View Details
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="relative"
                        >
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Manual item
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          />
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <span
                              class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="relative"
                        >
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Manual item
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          />
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <span
                              class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="relative"
                        >
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Manual item
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          />
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <span
                              class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `);
    });
    it('should render with sidebar', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults.sidebarRss]} addTypename={false}>
          <FeaturedContent
            sidebar={<SidebarRss title="RSS" feedUrl={mockFeedUrl} />}
            sidebarPosition={SidebarPosition.Left}
          >
            <ContentTileStandardLayout
              headerOptions={headerOptions}
              desktopColumnCount={2}
              onAddedToQueue={handleAddedToQueue}
            >
              <ContentTileStandardLayout.Item {...mockItems.manual} />
              <ContentTileStandardLayout.Item {...mockItems.manual} />
            </ContentTileStandardLayout>
          </FeaturedContent>
        </MockedProvider>
      );
      await waitFor(() => new Promise(res => setTimeout(res, 0)));
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none"
          >
            <div
              class="w-full relative pl-4 pr-4 float-left grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div
                class="relative"
              >
                <div
                  class="md:h-full md:absolute md:left-0 w-full"
                >
                  <div>
                    <h3>
                      RSS
                    </h3>
                  </div>
                  <hr
                    class="relative my-4"
                  />
                  <div
                    class="overflow-y-scroll text-sm md:h-full"
                  >
                    <a
                      class="block mb-4"
                      href="/rss-link1"
                    >
                      Link 1
                    </a>
                    <a
                      class="block mb-4"
                      href="/rss-link2"
                    >
                      Link 2
                    </a>
                    <a
                      class="block mb-4"
                      href="/rss-link3"
                    >
                      Link 3
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="md:col-span-3"
              >
                <div>
                  <h3>
                    Feature Content Header
                  </h3>
                </div>
                <hr
                  class="relative my-4"
                />
                <ul
                  class="grid gap-5 grid-cols-1 md:grid-cols-2"
                >
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="relative md:p-2"
                        >
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Manual item
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          />
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <span
                              class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block text-gray-800 "
                      href="/"
                    >
                      <div
                        class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 border border-solid border-gray-300 relative"
                      >
                        <div
                          class="relative md:p-2"
                        >
                          <img
                            class="max-w-full h-auto"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          />
                        </div>
                        <div
                          class="p-2.5"
                        >
                          <p
                            class="mb-1"
                          >
                            Manual item
                          </p>
                          <div
                            class="text-xs text-gray-700"
                          />
                          <p
                            class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                          >
                            description
                          </p>
                          <hr
                            class="my-3"
                          />
                          <div
                            class="text-base leading-none"
                          >
                            <span
                              class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('SidebarRss', () => {
    it('should render', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults.sidebarRss]} addTypename={false}>
          <SidebarRss title="RSS" feedUrl={mockFeedUrl} />
        </MockedProvider>
      );
      await waitFor(() => new Promise(res => setTimeout(res, 0)));
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="md:h-full md:absolute md:left-0 w-full"
          >
            <div>
              <h3>
                RSS
              </h3>
            </div>
            <hr
              class="relative my-4"
            />
            <div
              class="overflow-y-scroll text-sm md:h-full"
            >
              <a
                class="block mb-4"
                href="/rss-link1"
              >
                Link 1
              </a>
              <a
                class="block mb-4"
                href="/rss-link2"
              >
                Link 2
              </a>
              <a
                class="block mb-4"
                href="/rss-link3"
              >
                Link 3
              </a>
            </div>
          </div>
        </div>
      `);
    });

    it('should render loading or error state', async () => {
      const { container } = render(
        <MockedProvider mocks={[]} addTypename={false}>
          <SidebarRss title="RSS" feedUrl={mockFeedUrl} />
        </MockedProvider>
      );
      await waitFor(() => new Promise(res => setTimeout(res, 0)));
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="md:h-full md:absolute md:left-0 w-full"
          >
            <div>
              <h3>
                RSS
              </h3>
            </div>
            <hr
              class="relative my-4"
            />
            <div
              class="overflow-y-scroll text-sm md:h-full"
            >
              <h5>
                please-wait
              </h5>
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('SidebarDefault', () => {
    it('should render', () => {
      const { container } = render(
        <SidebarDefault title="Default">Static sidebar content</SidebarDefault>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="md:h-full md:absolute md:left-0 w-full"
          >
            <div>
              <h3>
                Default
              </h3>
            </div>
            <hr
              class="relative my-4"
            />
            <div
              class="overflow-y-scroll text-sm md:h-full"
            >
              Static sidebar content
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('ContentTileStandardLayout', () => {
    it('should error when rendered without a parent <ContentTileStandardLayout />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<ContentTileStandardLayout.Item {...mockItems.manual} />)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <ContentTileStandardLayout
          headerOptions={headerOptions}
          desktopColumnCount={2}
          onAddedToQueue={handleAddedToQueue}
        >
          <ContentTileStandardLayout.Item {...mockItems.manual} />
        </ContentTileStandardLayout>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <h3>
              Feature Content Header
            </h3>
          </div>
          <hr
            class="relative my-4"
          />
          <ul
            class="grid gap-5 grid-cols-1 md:grid-cols-2"
          >
            <li>
              <a
                class="block text-gray-800 "
                href="/"
              >
                <div
                  class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 border border-solid border-gray-300 relative"
                >
                  <div
                    class="relative md:p-2"
                  >
                    <img
                      class="max-w-full h-auto"
                      src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                    />
                  </div>
                  <div
                    class="p-2.5"
                  >
                    <p
                      class="mb-1"
                    >
                      Manual item
                    </p>
                    <div
                      class="text-xs text-gray-700"
                    />
                    <p
                      class="text-xs text-gray-700 pt-1 mb-0 overflow-hidden"
                    >
                      description
                    </p>
                    <hr
                      class="my-3"
                    />
                    <div
                      class="text-base leading-none"
                    >
                      <span
                        class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      `);
    });
  });

  describe('ContentTileDescriptiveLayout', () => {
    it('should error when rendered without a parent <ContentTileDescriptiveLayout />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() =>
        render(<ContentTileDescriptiveLayout.Item {...mockItems.manual} />)
      ).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <ContentTileDescriptiveLayout
          headerOptions={headerOptions}
          desktopColumnCount={2}
          onAddedToQueue={handleAddedToQueue}
        >
          <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        </ContentTileDescriptiveLayout>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <h3>
              Feature Content Header
            </h3>
          </div>
          <hr
            class="relative my-4"
          />
          <ul
            class="grid gap-5 grid-cols-1 md:grid-cols-2"
          >
            <li>
              <a
                class="block text-gray-800 "
                href="/"
              >
                <div
                  class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 border border-solid border-gray-300 relative"
                >
                  <div
                    class="relative md:p-2"
                  >
                    <img
                      class="max-w-full h-auto"
                      src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                    />
                  </div>
                  <div
                    class="p-2.5"
                  >
                    <p
                      class="mt-4 mb-0 text-base font-bold"
                    >
                      Manual item
                    </p>
                    <p
                      class="text-xs text-gray-700 mb-1"
                    />
                    <p
                      class="mt-4 text-xs relative before:content-[' '] before:border-text-accent before:border-t-2 before:absolute before:left-0 before:border-solid before:w-8 before:h-0 before:-top-1.5"
                    >
                      description
                    </p>
                    <div
                      class="text-base leading-none flex justify-end"
                    />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      `);
    });
  });

  describe('ContentMultiCarousel', () => {
    it('should error when rendered without a parent <ContentMultiCarousel />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<ContentMultiCarousel.Item {...mockItems.manual} />)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <ContentMultiCarousel
          headerOptions={headerOptions}
          desktopColumnCount={2}
          onAddedToQueue={handleAddedToQueue}
        >
          <ContentMultiCarousel.Item {...mockItems.manual} />
        </ContentMultiCarousel>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <h3>
              Feature Content Header
            </h3>
          </div>
          <hr
            class="relative my-4"
          />
          <div
            class="whitespace-nowrap overflow-hidden relative"
          >
            <ul
              class="transition-all duration-500 flex"
              style="transform: translateX(-0%);"
            >
              <li
                class="px-5 pb-5 text-base flex-none w-full md:w-1/2"
              >
                <a
                  class="block text-gray-800 "
                  href="/"
                >
                  <div
                    class="border-r-2 border-solid border-white relative bg-gray-100"
                  >
                    <div
                      class="relative"
                    >
                      <img
                        class="max-w-full h-auto p-2.5 pb-0"
                        src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                      />
                    </div>
                    <div
                      class="text-center py-3 px-1"
                    >
                      <h4
                        class="text-sm font-bold mb-2"
                      >
                        Manual item
                      </h4>
                      <p
                        class="text-xs text-gray-700 mb-1.5"
                      />
                      <p
                        class="mt-1.5 mb-0 text-xs relative text-left py-0 px-2"
                      >
                        description
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      `);
    });
  });

  describe('ContentCarousel', () => {
    it('should error when rendered without a parent <ContentCarousel />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<ContentCarousel.Item {...mockItems.manual} />)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <ContentCarousel headerOptions={headerOptions}>
          <ContentCarousel.Item {...mockItems.manual} />
        </ContentCarousel>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <h3>
              Feature Content Header
            </h3>
          </div>
          <hr
            class="relative my-4"
          />
          <div
            class="whitespace-nowrap overflow-hidden relative"
          >
            <ul
              class="transition-all duration-500 m-0 flex"
            >
              <li
                class="flex-none w-full whitespace-normal text-base"
              >
                <a
                  class="block text-gray-800 "
                  href="/"
                >
                  <div
                    class="relative bg-gray-100"
                  >
                    <img
                      class="max-w-full h-auto w-full"
                      src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                    />
                    <div
                      class="absolute bottom-0 left-0 w-full p-4 pb-11 bg-gray-900 bg-opacity-60"
                    >
                      <h4
                        class="mb-0 text-base font-bold text-white"
                      >
                        Manual item
                      </h4>
                      <p
                        class="mt-1.5 mb-0 text-xs text-white"
                      >
                        description
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div
              class="absolute text-center left-0 w-full bottom-2"
            >
              <div
                class="rounded-full inline-block mr-1 h-1 w-1 bg-accent"
              />
            </div>
            <div
              class="absolute bottom-2 right-6"
            >
              <button
                aria-label="left"
                class="transition-colors relative text-center no-underline inline-block text-accent-contrast bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover p-0.5 cursor-default pointer-events-none opacity-25"
              >
                <svg
                  class="h-5 w-5"
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
              </button>
              <button
                aria-label="right"
                class="transition-colors relative text-center no-underline inline-block text-accent-contrast bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover p-0.5 cursor-default pointer-events-none opacity-25"
              >
                <svg
                  class="h-5 w-5"
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
              </button>
            </div>
          </div>
        </div>
      `);
    });
  });

  describe('ContentTileImageOverlay', () => {
    it('should error when rendered without a parent <ContentTileImageOverlay />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<ContentTileImageOverlay.Item {...mockItems.manual} />)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <ContentTileImageOverlay
          headerOptions={headerOptions}
          desktopColumnCount={2}
          onAddedToQueue={handleAddedToQueue}
        >
          <ContentTileImageOverlay.Item {...mockItems.manual} />
        </ContentTileImageOverlay>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <h3>
              Feature Content Header
            </h3>
          </div>
          <hr
            class="relative my-4"
          />
          <ul
            class="grid gap-5 grid-cols-1 md:grid-cols-2"
          >
            <li>
              <a
                class="block text-gray-800 "
                href="/"
              >
                <div
                  class="relative"
                >
                  <img
                    class="max-w-full h-auto"
                    src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                  />
                  <div
                    class="absolute bottom-0 left-0 p-4 w-full bg-gray-900 bg-opacity-80"
                  >
                    <h4
                      class="mb-0 text-sm text-white"
                    >
                      Manual item
                    </h4>
                    <p
                      class="mt-1 mb-0 text-xs text-white"
                    >
                      description
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      `);
    });
  });
});
