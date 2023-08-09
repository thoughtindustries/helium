import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { CatalogProvider, Catalog } from '../src';
import {
  CatalogContentDocument,
  CatalogContentQuery,
  GlobalTypes,
  LanguagesQueryDocument
} from '@thoughtindustries/content';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key,
      i18n: {
        t: (key: string) => key
      }
    };
  }
}));

type MockQueryProps = {
  displayType: GlobalTypes.ContentItemDisplayType;
  sortColumn: GlobalTypes.SortColumn;
  sortDirection: GlobalTypes.SortDirection;
};
const mockBundle = {
  id: 'uuid-bundle',
  name: 'test bundle',
  priceInCents: 100,
  annualPriceInCents: 1000,
  slug: 'test-bundle'
};
const mockAggregations = [
  {
    label: 'Label 1',
    buckets: [
      {
        value: 'Bucket 1',
        count: 10
      },
      {
        value: 'Bucket 2',
        count: 20
      }
    ]
  },
  {
    label: 'Label 2',
    buckets: [
      {
        value: 'Bucket 3',
        count: 20
      }
    ]
  },
  {
    label: 'Label 3',
    buckets: [
      {
        value: 'en',
        query: 'language:en',
        count: 30
      },
      {
        value: 'jp',
        query: 'language:jp',
        count: 40
      }
    ]
  }
];
const mockContentTypes = ['type 1', 'type 2'];
const mockContentItem = {
  asset: 'https://test.com/asset.jpg',
  authors: ['Test Author'],
  availabilityStatus: '',
  canAddToQueue: true,
  contentTypeLabel: 'Course',
  courseEndDate: new Date(2020, 1, 1).toISOString(),
  courseGracePeriodEnded: false,
  coursePresold: false,
  courseStartDate: new Date(2020, 0, 1).toISOString(),
  currentUserMayReschedule: false,
  description: 'description',
  kind: GlobalTypes.ContentKind.Course,
  hasChildren: false,
  hideCourseDescription: false,
  id: 'uuid',
  isActive: true,
  isCompleted: true,
  location: {
    id: 'uuid-location',
    name: 'test location',
    address1: 'test address1',
    city: 'test city'
  },
  priceInCents: 6500,
  rating: 36,
  slug: 'test-content',
  source: 'Test source',
  suggestedRetailPriceInCents: 8000,
  timeZone: 'America/Los_Angeles',
  title: 'Test title',
  waitlistingEnabled: false,
  waitlistingTriggered: false,
  ribbon: {
    color: '#39ad39',
    contrastColor: '#fff',
    darkerColor: '#2c872c',
    label: 'Test ribbon',
    slug: 'test-ribbon'
  }
};
const mockContentItemFactory = (length: number) =>
  Array.from({ length }, () => ({ ...mockContentItem }));
const mockCatalogContentFactory = ({
  displayType,
  sortColumn,
  sortDirection
}: MockQueryProps): CatalogContentQuery['CatalogContent'] => ({
  contentItems: mockContentItemFactory(1),
  meta: {
    displayBundle: mockBundle,
    tokenLabel: 'query',
    total: 100,
    hasMore: true,
    isCurated: false,
    aggregations: mockAggregations,
    contentTypes: mockContentTypes,
    resultsDisplayType: displayType,
    selectedSortColumn: sortColumn,
    selectedSortDirection: sortDirection,
    sortUpdatedAtEnabled: true,
    sortCreatedAtEnabled: true,
    sortTitleEnabled: true,
    sortPublishDateEnabled: true,
    sortCourseStartDateEnabled: true,
    sortRelevanceEnabled: true,
    displayTypeListEnabled: true,
    displayTypeGridEnabled: true,
    displayTypeCalendarEnabled: true,
    displayStartDateEnabled: true,
    displayAuthorsEnabled: true,
    displayDescriptionOnCalendar: true,
    contentTypeFilterEnabled: true,
    queryCustomFields: '{}'
  }
});
const mockLanguages = [
  {
    label: 'English',
    code: 'en'
  }
];
const mockApolloResultsFactory = (props: MockQueryProps) => [
  {
    request: {
      query: CatalogContentDocument,
      variables: {
        page: 1,
        sortColumn: undefined,
        sortDirection: undefined,
        resultsDisplayType: undefined,
        token: undefined,
        contentTypes: [],
        query: undefined,
        labels: [],
        values: [],
        layoutId: undefined,
        widgetId: undefined
      }
    },
    result: {
      data: {
        CatalogContent: mockCatalogContentFactory(props)
      }
    }
  },
  {
    request: {
      query: LanguagesQueryDocument
    },
    result: {
      data: {
        Languages: [...mockLanguages]
      }
    }
  }
];

const handleAddedToQueue = (): Promise<boolean | void> => {
  return Promise.resolve();
};

// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};

const resolveQueriesAsync = async () => {
  // wait till catalog content query resolves
  expect(await screen.findByText(mockContentItem.title)).toBeInTheDocument();
  // wait till languages query resolves
  expect(await screen.findByText(mockLanguages[0].label)).toBeInTheDocument();
};

describe('@thoughtindustries/catalog', () => {
  describe('Catalog', () => {
    const props = {
      pathName: '/catalog',
      ssr: true
    };

    it('should error when rendered without a parent <CatalogProvider />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<Catalog onAddedToQueue={handleAddedToQueue} />)).toThrowError();
      spy.mockRestore();
    });

    it('should render list view', async () => {
      const displayType = GlobalTypes.ContentItemDisplayType.List;
      const sortColumn = GlobalTypes.SortColumn.DisplayDate;
      const sortDirection = GlobalTypes.SortDirection.Asc;
      const apolloMock = mockApolloResultsFactory({ displayType, sortColumn, sortDirection });
      const { container } = render(
        <MockedProvider
          mocks={[...apolloMock]}
          addTypename={false}
          defaultOptions={mockedApolloProviderOptions}
        >
          <CatalogProvider {...props}>
            <Catalog onAddedToQueue={handleAddedToQueue} />
          </CatalogProvider>
        </MockedProvider>
      );
      await resolveQueriesAsync();
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-full"
          >
            <div>
              <h3>
                catalog-search-header
              </h3>
            </div>
            <div>
              <div
                class="mb-6 w-full flex flex-col md:flex-row md:gap-x-1"
              >
                <div
                  class="md:flex-1 md:border md:border-solid md:border-gray-400 md:bg-gray-100"
                >
                  <div
                    class="grid grid-cols-2 md:grid-cols-12 md:h-full"
                  >
                    <div
                      class="px-4 mb-2 col-span-full md:bg-white md:mb-0 md:col-span-3"
                    >
                      <div
                        class="md:h-full relative"
                      >
                        <form
                          action="/catalog"
                          class="md:h-full"
                          method="GET"
                        >
                          <input
                            aria-label="Catalog Search"
                            class="border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm"
                            name="query"
                            placeholder="catalog-search-placeholder"
                            type="text"
                            value=""
                          />
                          <span
                            class="mb-0 absolute h-full top-0 right-0 p-1 table"
                          >
                            <i
                              aria-label="search"
                              class="text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle"
                            >
                              <svg
                                fill="currentColor"
                                height="30px"
                                viewBox="0 0 30 30"
                                width="30px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                                />
                              </svg>
                            </i>
                          </span>
                        </form>
                      </div>
                    </div>
                    <div
                      class="relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0"
                    >
                      <div
                        class="grid grid-cols-12 md:h-full"
                      >
                        <div
                          class="md:relative col-span-full md:col-span-2"
                        >
                          <div
                            class="relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
                          >
                            <button
                              class="flex w-full h-full justify-between items-center"
                            >
                              filter-by
                              <span
                                class="w-4 h-4"
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
                              </span>
                            </button>
                            <ul
                              class="absolute z-50 mt-px -left-0.5 md:-left-4 invisible"
                              id="content-type-options"
                              style="min-width: 160px;"
                            >
                              <li
                                class="p-px bg-white"
                              >
                                <a
                                  class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                                  href="/catalog?content-types=%5B%22type+1%22%5D"
                                >
                                  type 1
                                </a>
                              </li>
                              <li
                                class="p-px bg-white"
                              >
                                <a
                                  class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                                  href="/catalog?content-types=%5B%22type+2%22%5D"
                                >
                                  type 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-span-full md:col-span-10 mb-2 md:h-full md:mb-0 text-sm"
                        />
                      </div>
                    </div>
                    <div
                      class="md:border-l md:border-l-solid md:border-l-gray-400 md:bg-white md:col-span-2 relative px-4 float-left mb-2 md:h-full md:mb-0 md:pr-0"
                    >
                      <div
                        class="relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
                      >
                        <button
                          class="flex w-full h-full justify-between items-center"
                        >
                          catalog.sort-by
                          <span
                            class="w-4 h-4"
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
                          </span>
                        </button>
                        <ul
                          class="absolute z-50 mt-px -left-0.5 md:-left-4 invisible"
                          id="sort-options"
                          style="min-width: 160px;"
                        >
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=updatedAt%3Adesc"
                            >
                              catalog.sort-updated
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=createdAt%3Adesc"
                            >
                              catalog.sort-created
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=title%3Aasc"
                            >
                              catalog.sort-title
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=publishDate%3Adesc"
                            >
                              catalog.sort-publish-date
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=courseStartDate%3Aasc"
                            >
                              catalog.sort-course-start-date
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=relevance"
                            >
                              catalog.sort-relevance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 md:px-0 md:flex-none"
                >
                  <div
                    class="flex flex-wrap gap-x-1 justify-end"
                  >
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center cursor-default pointer-events-none bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent"
                      href="/catalog?display-type=list"
                    >
                      <i
                        aria-label="list view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M44.88,13H15.13A2.07,2.07,0,0,1,13,11a2.07,2.07,0,0,1,2.13-2H44.88A2.07,2.07,0,0,1,47,11,2.07,2.07,0,0,1,44.88,13Z"
                          />
                          <path
                            d="M44.88,25H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,25Z"
                          />
                          <path
                            d="M44.88,37H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,37Z"
                          />
                          <circle
                            cx="6"
                            cy="11"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="23"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="35"
                            r="3"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=grid"
                    >
                      <i
                        aria-label="grid view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="none"
                            height="24"
                            width="24"
                            x="4"
                            y="4"
                          />
                          <line
                            x1="16"
                            x2="16"
                            y1="28"
                            y2="4"
                          />
                          <line
                            x1="4"
                            x2="28"
                            y1="16"
                            y2="16"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=calendar"
                    >
                      <i
                        aria-label="calendar view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            fill="none"
                            r="20"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            fill="currentColor"
                            r="2"
                          />
                          <line
                            x1="20"
                            x2="28"
                            y1="2"
                            y2="2"
                          />
                          <line
                            x1="24"
                            x2="24"
                            y1="24"
                            y2="8"
                          />
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="w-full"
              >
                <div
                  class="grid grid-cols-4 gap-4"
                >
                  <div
                    class="col-span-full md:col-span-1"
                  >
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2 border-b mb-4 bg-gray-100"
                    >
                      <button
                        aria-expanded="true"
                        aria-labelledby="catalog-aggregation-dropdown-0"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
                        >
                          <svg
                            class="w-full h-full"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </svg>
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 1
                        </span>
                      </button>
                      <ul
                        aria-hidden="false"
                        class="pl-6 text-sm"
                        id="catalog-aggregation-dropdown-0"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+1%22%5D"
                          >
                            Bucket 1
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (10)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+2%22%5D"
                          >
                            Bucket 2
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-1"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 2
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-1"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+2%22%5D&values=%5B%22Bucket+3%22%5D"
                          >
                            Bucket 3
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-2"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 3
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-2"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22en%22%5D"
                          >
                            English
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (30)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22jp%22%5D"
                          >
                            jp
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (40)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-span-full md:col-span-3"
                  >
                    <a
                      class="block text-gray-800 "
                      href="/courses/test-content"
                    >
                      <div
                        class="mb-5 border-b border-solid border-gray-300 mr-2 pb-5"
                      >
                        <div
                          class="relative"
                        >
                          <div
                            class="grid grid-cols-4"
                          >
                            <div
                              class="col-span-full md:col-span-3"
                            >
                              <h3
                                class="pr-3 text-black"
                              >
                                Test title
                                <br />
                                <span
                                  class="text-xs text-gray-700"
                                >
                                  12/31/2019
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div
                          class="relative"
                        >
                          <div
                            class="text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap -right-2 -top-5"
                            style="color: rgb(255, 255, 255); background-color: rgb(57, 173, 57);"
                          >
                            <div
                              class="absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent"
                              style="border-top-color: #2c872c; border-left-color: #2c872c;"
                            />
                            Test ribbon
                          </div>
                          <div
                            class="grid grid-cols-12 gap-4"
                          >
                            <div
                              class="col-span-full md:col-span-4"
                            >
                              <img
                                class="max-w-full h-auto"
                                src="https://test.com/asset.jpg"
                              />
                            </div>
                            <div
                              class="col-span-full md:col-span-5"
                            >
                              <div
                                class="mt-3 text-xs"
                              >
                                <strong>
                                  Course
                                </strong>
                                | Test Author
                                <p
                                  class="mb-1 text-gray-700"
                                >
                                  Test source
                                </p>
                              </div>
                              <div
                                class="text-xs mt-2 text-gray-700 pr-1 leading-6"
                              >
                                description
                              </div>
                            </div>
                            <div
                              class="col-span-full md:col-span-3"
                            >
                              <div
                                class="border border-solid border-gray-300 p-4 mt-4 md:-mt-4 text-center"
                              >
                                <div
                                  class="mt-4"
                                >
                                  <span
                                    class="bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-3 table mx-auto"
                                  >
                                    course-view-details
                                  </span>
                                  <button
                                    class="pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover mt-3 mx-auto block"
                                  >
                                    <span
                                      class="flex items-center gap-x-1"
                                    >
                                      <i
                                        aria-label="plus"
                                        class="inline-block w-3 h-3"
                                      >
                                        <svg
                                          class="w-full h-full"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          />
                                        </svg>
                                      </i>
                                       course-add-to-queue
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div
                      class="mx-2 my-4 flex flex-wrap-reverse items-center justify-between"
                    >
                      <div
                        class="mt-2 flex items-center justify-start"
                      >
                        <span>
                          Showing
                          <strong>
                             1-48 
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=1"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 mr-2 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=0"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-l-1 border-r-0 rounded-r-none cursor-default pointer-events-none bg-accent border-accent text-accent-contrast"
                            href="/catalog?page=1"
                          >
                            1
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 border-x-0 text-gray-600"
                            href="/catalog?page=2"
                          >
                            2
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-r-1 border-l-0 rounded-l-none text-gray-600"
                            href="/catalog?page=3"
                          >
                            3
                          </a>
                          <a
                            aria-label="navigateright"
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 ml-2 text-gray-600"
                            href="/catalog?page=2"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 text-gray-600"
                            href="/catalog?page=3"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    });

    it('should render grid view', async () => {
      const displayType = GlobalTypes.ContentItemDisplayType.Grid;
      const sortColumn = GlobalTypes.SortColumn.DisplayDate;
      const sortDirection = GlobalTypes.SortDirection.Asc;
      const apolloMock = mockApolloResultsFactory({ displayType, sortColumn, sortDirection });
      const { container } = render(
        <MockedProvider
          mocks={[...apolloMock]}
          addTypename={false}
          defaultOptions={mockedApolloProviderOptions}
        >
          <CatalogProvider {...props}>
            <Catalog onAddedToQueue={handleAddedToQueue} />
          </CatalogProvider>
        </MockedProvider>
      );
      await resolveQueriesAsync();
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-full"
          >
            <div>
              <h3>
                catalog-search-header
              </h3>
            </div>
            <div>
              <div
                class="mb-6 w-full flex flex-col md:flex-row md:gap-x-1"
              >
                <div
                  class="md:flex-1 md:border md:border-solid md:border-gray-400 md:bg-gray-100"
                >
                  <div
                    class="grid grid-cols-2 md:grid-cols-12 md:h-full"
                  >
                    <div
                      class="px-4 mb-2 col-span-full md:bg-white md:mb-0 md:col-span-3"
                    >
                      <div
                        class="md:h-full relative"
                      >
                        <form
                          action="/catalog"
                          class="md:h-full"
                          method="GET"
                        >
                          <input
                            aria-label="Catalog Search"
                            class="border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm"
                            name="query"
                            placeholder="catalog-search-placeholder"
                            type="text"
                            value=""
                          />
                          <span
                            class="mb-0 absolute h-full top-0 right-0 p-1 table"
                          >
                            <i
                              aria-label="search"
                              class="text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle"
                            >
                              <svg
                                fill="currentColor"
                                height="30px"
                                viewBox="0 0 30 30"
                                width="30px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                                />
                              </svg>
                            </i>
                          </span>
                        </form>
                      </div>
                    </div>
                    <div
                      class="relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0"
                    >
                      <div
                        class="grid grid-cols-12 md:h-full"
                      >
                        <div
                          class="md:relative col-span-full md:col-span-2"
                        >
                          <div
                            class="relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
                          >
                            <button
                              class="flex w-full h-full justify-between items-center"
                            >
                              filter-by
                              <span
                                class="w-4 h-4"
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
                              </span>
                            </button>
                            <ul
                              class="absolute z-50 mt-px -left-0.5 md:-left-4 invisible"
                              id="content-type-options"
                              style="min-width: 160px;"
                            >
                              <li
                                class="p-px bg-white"
                              >
                                <a
                                  class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                                  href="/catalog?content-types=%5B%22type+1%22%5D"
                                >
                                  type 1
                                </a>
                              </li>
                              <li
                                class="p-px bg-white"
                              >
                                <a
                                  class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                                  href="/catalog?content-types=%5B%22type+2%22%5D"
                                >
                                  type 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="col-span-full md:col-span-10 mb-2 md:h-full md:mb-0 text-sm"
                        />
                      </div>
                    </div>
                    <div
                      class="md:border-l md:border-l-solid md:border-l-gray-400 md:bg-white md:col-span-2 relative px-4 float-left mb-2 md:h-full md:mb-0 md:pr-0"
                    >
                      <div
                        class="relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent"
                      >
                        <button
                          class="flex w-full h-full justify-between items-center"
                        >
                          catalog.sort-by
                          <span
                            class="w-4 h-4"
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
                          </span>
                        </button>
                        <ul
                          class="absolute z-50 mt-px -left-0.5 md:-left-4 invisible"
                          id="sort-options"
                          style="min-width: 160px;"
                        >
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=updatedAt%3Adesc"
                            >
                              catalog.sort-updated
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=createdAt%3Adesc"
                            >
                              catalog.sort-created
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=title%3Aasc"
                            >
                              catalog.sort-title
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=publishDate%3Adesc"
                            >
                              catalog.sort-publish-date
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=courseStartDate%3Aasc"
                            >
                              catalog.sort-course-start-date
                            </a>
                          </li>
                          <li
                            class="p-px bg-white"
                          >
                            <a
                              class="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5"
                              href="/catalog?sort=relevance"
                            >
                              catalog.sort-relevance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 md:px-0 md:flex-none"
                >
                  <div
                    class="flex flex-wrap gap-x-1 justify-end"
                  >
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=list"
                    >
                      <i
                        aria-label="list view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M44.88,13H15.13A2.07,2.07,0,0,1,13,11a2.07,2.07,0,0,1,2.13-2H44.88A2.07,2.07,0,0,1,47,11,2.07,2.07,0,0,1,44.88,13Z"
                          />
                          <path
                            d="M44.88,25H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,25Z"
                          />
                          <path
                            d="M44.88,37H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,37Z"
                          />
                          <circle
                            cx="6"
                            cy="11"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="23"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="35"
                            r="3"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center cursor-default pointer-events-none bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent"
                      href="/catalog?display-type=grid"
                    >
                      <i
                        aria-label="grid view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="none"
                            height="24"
                            width="24"
                            x="4"
                            y="4"
                          />
                          <line
                            x1="16"
                            x2="16"
                            y1="28"
                            y2="4"
                          />
                          <line
                            x1="4"
                            x2="28"
                            y1="16"
                            y2="16"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=calendar"
                    >
                      <i
                        aria-label="calendar view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            fill="none"
                            r="20"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            fill="currentColor"
                            r="2"
                          />
                          <line
                            x1="20"
                            x2="28"
                            y1="2"
                            y2="2"
                          />
                          <line
                            x1="24"
                            x2="24"
                            y1="24"
                            y2="8"
                          />
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="w-full"
              >
                <div
                  class="grid grid-cols-4 gap-4"
                >
                  <div
                    class="col-span-full md:col-span-1"
                  >
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2 border-b mb-4 bg-gray-100"
                    >
                      <button
                        aria-expanded="true"
                        aria-labelledby="catalog-aggregation-dropdown-0"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
                        >
                          <svg
                            class="w-full h-full"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </svg>
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 1
                        </span>
                      </button>
                      <ul
                        aria-hidden="false"
                        class="pl-6 text-sm"
                        id="catalog-aggregation-dropdown-0"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+1%22%5D"
                          >
                            Bucket 1
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (10)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+2%22%5D"
                          >
                            Bucket 2
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-1"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 2
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-1"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+2%22%5D&values=%5B%22Bucket+3%22%5D"
                          >
                            Bucket 3
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-2"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 3
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-2"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22en%22%5D"
                          >
                            English
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (30)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22jp%22%5D"
                          >
                            jp
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (40)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-span-full md:col-span-3"
                  >
                    <ul
                      class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    >
                      <li>
                        <a
                          class="block text-gray-800 "
                          href="/courses/test-content"
                        >
                          <div
                            class="grid grid-cols-1 border border-solid border-gray-300 relative"
                          >
                            <div
                              class="text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap -right-2 -top-1"
                              style="color: rgb(255, 255, 255); background-color: rgb(57, 173, 57);"
                            >
                              <div
                                class="absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent"
                                style="border-top-color: #2c872c; border-left-color: #2c872c;"
                              />
                              Test ribbon
                            </div>
                            <div
                              class="relative"
                            >
                              <img
                                class="max-w-full h-auto"
                                src="https://test.com/asset.jpg"
                              />
                            </div>
                            <div
                              class="p-2.5"
                            >
                              <div
                                class="mb-1"
                              >
                                <h3
                                  class="leading-6 overflow-hidden block transition-all"
                                  style="transition-duration: 0.25s;"
                                >
                                  Test title
                                </h3>
                                <div
                                  class="leading-4 overflow-hidden block transition-all"
                                  style="transition-duration: 0.25s;"
                                >
                                  <span
                                    class="text-xs text-gray-700"
                                  >
                                    12/31/2019
                                  </span>
                                </div>
                              </div>
                              <div
                                class="text-xs text-gray-700 leading-4 overflow-hidden block transition-all"
                                style="transition-duration: 0.25s;"
                              >
                                <strong>
                                  Course
                                </strong>
                                |Test source
                              </div>
                              <p
                                class="text-xs mb-1 text-gray-700 leading-4 overflow-hidden block transition-all"
                                style="transition-duration: 0.25s;"
                              >
                                Test Author
                              </p>
                              <p
                                class="text-xs text-gray-700 pt-1 mb-0 leading-4 overflow-hidden block transition-all"
                                style="transition-duration: 0.25s;"
                              >
                                description
                              </p>
                              <div
                                class="h-6"
                              >
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
                                      class="pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover"
                                    >
                                      <span
                                        class="flex items-center gap-x-1"
                                      >
                                        <i
                                          aria-label="plus"
                                          class="inline-block w-3 h-3"
                                        >
                                          <svg
                                            class="w-full h-full"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                            />
                                          </svg>
                                        </i>
                                         course-add-to-queue
                                      </span>
                                    </button>
                                  </span>
                                  <span>
                                    <span
                                      class="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"
                                    >
                                      course-view-details
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div
                          class="pt-1 px-4 pb-2 leading-none bg-accent text-accent-contrast"
                        >
                          <small>
                            primary-bundle-intro
                          </small>
                          <div
                            class="flex justify-between items-end"
                          >
                            <div>
                              <div>
                                <span
                                  class="font-bold text-sm"
                                >
                                  $1.00
                                </span>
                                <span
                                  class="text-xs"
                                >
                                  / course.per-month
                                </span>
                              </div>
                              <div>
                                <span
                                  class="font-bold text-sm"
                                >
                                  $10.00
                                </span>
                                <span
                                  class="text-xs"
                                >
                                  / course.per-year
                                </span>
                              </div>
                            </div>
                            <a
                              class="cursor-pointer relative font-normal font-secondary leading-none text-xs text-accent-contrast"
                              href="/bundle/test-bundle"
                            >
                              bundle.learn-button
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div
                      class="mx-2 my-4 flex flex-wrap-reverse items-center justify-between"
                    >
                      <div
                        class="mt-2 flex items-center justify-start"
                      >
                        <span>
                          Showing
                          <strong>
                             1-48 
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=1"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 mr-2 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=0"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-l-1 border-r-0 rounded-r-none cursor-default pointer-events-none bg-accent border-accent text-accent-contrast"
                            href="/catalog?page=1"
                          >
                            1
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 border-x-0 text-gray-600"
                            href="/catalog?page=2"
                          >
                            2
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-r-1 border-l-0 rounded-l-none text-gray-600"
                            href="/catalog?page=3"
                          >
                            3
                          </a>
                          <a
                            aria-label="navigateright"
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 ml-2 text-gray-600"
                            href="/catalog?page=2"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 text-gray-600"
                            href="/catalog?page=3"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    });

    it('should render calendar view', async () => {
      const displayType = GlobalTypes.ContentItemDisplayType.Calendar;
      const sortColumn = GlobalTypes.SortColumn.DisplayDate;
      const sortDirection = GlobalTypes.SortDirection.Asc;
      const apolloMock = mockApolloResultsFactory({ displayType, sortColumn, sortDirection });
      const { container } = render(
        <MockedProvider
          mocks={[...apolloMock]}
          addTypename={false}
          defaultOptions={mockedApolloProviderOptions}
        >
          <CatalogProvider {...props}>
            <Catalog onAddedToQueue={handleAddedToQueue} />
          </CatalogProvider>
        </MockedProvider>
      );
      await resolveQueriesAsync();
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="w-full"
          >
            <div>
              <h3>
                catalog-search-header
              </h3>
            </div>
            <div>
              <div
                class="mb-6 w-full flex flex-col md:flex-row md:gap-x-1"
              >
                <div
                  class="md:flex-1 md:border md:border-solid md:border-gray-400 md:bg-gray-100"
                >
                  <div
                    class="grid grid-cols-2 md:grid-cols-12 md:h-full"
                  >
                    <div
                      class="px-4 mb-2 col-span-full md:bg-white md:mb-0 md:col-span-3"
                    >
                      <div
                        class="md:h-full relative"
                      >
                        <form
                          action="/catalog"
                          class="md:h-full"
                          method="GET"
                        >
                          <input
                            aria-label="Catalog Search"
                            class="border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm"
                            name="query"
                            placeholder="catalog-search-placeholder"
                            type="text"
                            value=""
                          />
                          <span
                            class="mb-0 absolute h-full top-0 right-0 p-1 table"
                          >
                            <i
                              aria-label="search"
                              class="text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle"
                            >
                              <svg
                                fill="currentColor"
                                height="30px"
                                viewBox="0 0 30 30"
                                width="30px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                                />
                              </svg>
                            </i>
                          </span>
                        </form>
                      </div>
                    </div>
                    <div
                      class="relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0"
                    >
                      <div
                        class="grid grid-cols-12 md:h-full"
                      >
                        <div
                          class="col-span-full md:col-span-10 mb-2 md:h-full md:mb-0 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 md:px-0 md:flex-none"
                >
                  <div
                    class="flex flex-wrap gap-x-1 justify-end"
                  >
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=list"
                    >
                      <i
                        aria-label="list view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M44.88,13H15.13A2.07,2.07,0,0,1,13,11a2.07,2.07,0,0,1,2.13-2H44.88A2.07,2.07,0,0,1,47,11,2.07,2.07,0,0,1,44.88,13Z"
                          />
                          <path
                            d="M44.88,25H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,25Z"
                          />
                          <path
                            d="M44.88,37H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,37Z"
                          />
                          <circle
                            cx="6"
                            cy="11"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="23"
                            r="3"
                          />
                          <circle
                            cx="6"
                            cy="35"
                            r="3"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center"
                      href="/catalog?display-type=grid"
                    >
                      <i
                        aria-label="grid view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="none"
                            height="24"
                            width="24"
                            x="4"
                            y="4"
                          />
                          <line
                            x1="16"
                            x2="16"
                            y1="28"
                            y2="4"
                          />
                          <line
                            x1="4"
                            x2="28"
                            y1="16"
                            y2="16"
                          />
                        </svg>
                      </i>
                    </a>
                    <a
                      class="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center cursor-default pointer-events-none bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent"
                      href="/catalog?display-type=calendar"
                    >
                      <i
                        aria-label="calendar view"
                        class="w-5 h-5"
                      >
                        <svg
                          class="w-full h-full"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            fill="none"
                            r="20"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            fill="currentColor"
                            r="2"
                          />
                          <line
                            x1="20"
                            x2="28"
                            y1="2"
                            y2="2"
                          />
                          <line
                            x1="24"
                            x2="24"
                            y1="24"
                            y2="8"
                          />
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="w-full"
              >
                <div
                  class="grid grid-cols-4 gap-4"
                >
                  <div
                    class="col-span-full md:col-span-1"
                  >
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2 border-b mb-4 bg-gray-100"
                    >
                      <button
                        aria-expanded="true"
                        aria-labelledby="catalog-aggregation-dropdown-0"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
                        >
                          <svg
                            class="w-full h-full"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </svg>
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 1
                        </span>
                      </button>
                      <ul
                        aria-hidden="false"
                        class="pl-6 text-sm"
                        id="catalog-aggregation-dropdown-0"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+1%22%5D"
                          >
                            Bucket 1
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (10)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+1%22%5D&values=%5B%22Bucket+2%22%5D"
                          >
                            Bucket 2
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-1"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 2
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-1"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+2%22%5D&values=%5B%22Bucket+3%22%5D"
                          >
                            Bucket 3
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (20)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="border-t border-solid border-gray-400 py-3 px-2"
                    >
                      <button
                        aria-expanded="false"
                        aria-labelledby="catalog-aggregation-dropdown-2"
                        class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                      >
                        <span
                          class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                        </span>
                        <span
                          class="font-semibold"
                        >
                          Label 3
                        </span>
                      </button>
                      <ul
                        aria-hidden="true"
                        class="pl-6 text-sm hidden"
                        id="catalog-aggregation-dropdown-2"
                      >
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22en%22%5D"
                          >
                            English
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (30)
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            class="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
                            href="/catalog?labels=%5B%22Label+3%22%5D&values=%5B%22jp%22%5D"
                          >
                            jp
                            <span
                              class="text-xs text-gray-700 pl-1"
                            >
                              (40)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-span-full md:col-span-3"
                  >
                    <div>
                      <table
                        class="table-auto border-collapse border-none md:border md:border-solid md:border-gray-400 rounded mb-10 text-sm w-full"
                      >
                        <caption
                          class="font-secondary text-xl leading-tight text-left mb-5"
                        >
                          Dec 2019
                        </caption>
                        <thead
                          class="h-px -m-px overflow-hidden p-0 absolute w-px md:h-full md:w-full md:static"
                        >
                          <tr>
                            <th
                              class="py-4 px-5 border-b border-solid border-gray-400 text-left w-1/4"
                            >
                              course
                            </th>
                            <th
                              class="py-4 px-5 border-b border-solid border-gray-400 text-left w-1/6"
                            >
                              catalog.location
                            </th>
                            <th
                              class="py-4 px-5 border-b border-solid border-gray-400 text-left w-1/4"
                            >
                              catalog.date-time
                            </th>
                            <th
                              class="py-4 px-5 border-b border-solid border-gray-400 text-left w-1/12"
                            >
                              catalog.price
                            </th>
                            <th
                              class="py-4 px-5 border-b border-solid border-gray-400 text-left w-1/4"
                            />
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            class="border border-solid border-gray-400 rounded block p-3 md:border-none md:rounded-none md:table-row mb-3"
                          >
                            <td
                              class="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0 border-none md:border-b md:border-solid md:border-gray-400"
                              data-label="courseHeading"
                            >
                              <div
                                class="grid grid-cols-12"
                              >
                                <div
                                  class="col-span-2"
                                >
                                  <button
                                    aria-controls="catalog-calendar-description-uuid"
                                    aria-expanded="false"
                                    class="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4"
                                  >
                                    <span
                                      class="text-xl inline-block leading-4 text-center w-5 h-5"
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
                                    </span>
                                  </button>
                                </div>
                                <div
                                  class="col-span-10"
                                >
                                  Test title
                                </div>
                              </div>
                            </td>
                            <td
                              class="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0 border-none md:border-b md:border-solid md:border-gray-400"
                              data-label="locationHeading"
                            >
                              <strong>
                                test location
                              </strong>
                              <br />
                              test city
                            </td>
                            <td
                              class="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0 border-none md:border-b md:border-solid md:border-gray-400"
                              data-label="dateTimeHeading"
                            >
                              Dec 31st 2019 04:00 PM PST
                            </td>
                            <td
                              class="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0 border-none md:border-b md:border-solid md:border-gray-400"
                              data-label="priceHeading"
                            >
                              $65.00
                            </td>
                            <td
                              class="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0 border-none md:border-b md:border-solid md:border-gray-400"
                            >
                              <div
                                class="flex flex-col gap-3 justify-center items-center"
                              >
                                <a
                                  class="bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-4 block w-full md:w-auto"
                                  href="/courses/test-content?courseId=uuid"
                                >
                                  course-view-details
                                </a>
                                <button
                                  class="pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover"
                                >
                                  <span
                                    class="flex items-center gap-x-1"
                                  >
                                    <i
                                      aria-label="plus"
                                      class="inline-block w-3 h-3"
                                    >
                                      <svg
                                        class="w-full h-full"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                        />
                                      </svg>
                                    </i>
                                     course-add-to-queue
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="mx-2 my-4 flex flex-wrap-reverse items-center justify-between"
                    >
                      <div
                        class="mt-2 flex items-center justify-start"
                      >
                        <span>
                          Showing
                          <strong>
                             1-48 
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=1"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 mr-2 cursor-default pointer-events-none text-gray-400 bg-gray-300 border-gray-300"
                            href="/catalog?page=0"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-l-1 border-r-0 rounded-r-none cursor-default pointer-events-none bg-accent border-accent text-accent-contrast"
                            href="/catalog?page=1"
                          >
                            1
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 border-x-0 text-gray-600"
                            href="/catalog?page=2"
                          >
                            2
                          </a>
                          <a
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded border-r-1 border-l-0 rounded-l-none text-gray-600"
                            href="/catalog?page=3"
                          >
                            3
                          </a>
                          <a
                            aria-label="navigateright"
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-r-none border-r-0 ml-2 text-gray-600"
                            href="/catalog?page=2"
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
                            class="w-7 h-7 rounded-none border border-solid border-gray-400 bg-white flex items-center justify-center p-1 rounded rounded-l-none border-r-1 text-gray-600"
                            href="/catalog?page=3"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
