import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Cookies from 'universal-cookie';
import { Cart, CartButton, CartItem, RelatedProductsDocument } from '../src';
import { serializeCart } from '../src/core/components/cart-provider/utilities';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

jest.mock('universal-cookie', () => {
  const mCookie = {
    get: jest.fn()
  };
  return jest.fn(() => mCookie);
});

const mockCartProductItem = {
  purchasableType: 'product',
  purchasableId: 'product-1',
  title: 'Test Product',
  priceInCents: 1000,
  quantity: 5,
  isBulkPurchase: false
};
const mockCartBundleItem = {
  purchasableType: 'bundle',
  purchasableId: 'bundle-1',
  title: 'Test bundle',
  interval: 'month',
  priceInCents: 100,
  quantity: 1,
  isBulkPurchase: false
};
const mockCartLearningPathItem = {
  purchasableType: 'learningPath',
  purchasableId: 'learning-path-1',
  title: 'Test learning path',
  priceInCents: 2000,
  quantity: 10,
  isBulkPurchase: true
};
const mockCartCourseItem = {
  purchasableType: 'course',
  purchasableId: 'course-1',
  title: 'Test course',
  priceInCents: 200,
  quantity: 1,
  instructorAccessPriceInCents: 300,
  isBulkPurchase: false
};
const mockCart = {
  items: [
    mockCartProductItem as CartItem,
    mockCartBundleItem as CartItem,
    mockCartLearningPathItem as CartItem,
    mockCartCourseItem as CartItem
  ]
};
const mockRelatedProduct = {
  id: 'product-2',
  name: 'Test product 2',
  suggestedRetailPriceInCents: 2000,
  priceInCents: 2500
};
const mockApolloResultsFactory = (
  productIds: string[],
  courseIds: string[],
  returnRelatedProducts: boolean
) => ({
  request: {
    query: RelatedProductsDocument,
    variables: {
      productIds,
      courseIds
    }
  },
  result: {
    data: {
      RelatedProducts: returnRelatedProducts ? [mockRelatedProduct] : []
    }
  },
  newData: () => ({
    data: {
      RelatedProducts: returnRelatedProducts ? [mockRelatedProduct] : []
    }
  })
});
// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};

describe('@thoughtindustries/cart', () => {
  describe('CartButton', () => {
    const checkoutUrl = '/checkout';

    beforeEach(() => {
      // mock universal-cookie getter
      const cookies = new Cookies();
      (cookies.get as jest.Mocked<any>).mockReturnValueOnce(serializeCart(mockCart));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should error when rendered without a parent <Cart />', () => {
      const spy = jest.spyOn(global.console, 'error').mockImplementation(jest.fn());
      expect(() => render(<CartButton />)).toThrowError();
      spy.mockRestore();
    });

    it('should render', () => {
      const { container } = render(
        <Cart checkoutUrl={checkoutUrl}>
          <CartButton />
        </Cart>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <button
            class="transition-colors ease-in-out duration-200 leading-normal cursor-pointer text-center text-black hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500 p-4"
            id="cart-button"
          >
            header-cart
            <span>
              (4)
            </span>
          </button>
        </div>
      `);
    });

    it('should render cart modal when clicked', async () => {
      // mock IntersectionObserver used by @headless-ui/react <Dialog />
      const mockIntersectionObserver = jest.fn();
      mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
      });
      window.IntersectionObserver = mockIntersectionObserver;

      const apolloMock = mockApolloResultsFactory(['product-1'], ['course-1'], true);
      const { getByRole } = render(
        <MockedProvider
          mocks={[apolloMock]}
          addTypename={false}
          defaultOptions={mockedApolloProviderOptions}
        >
          <Cart checkoutUrl={checkoutUrl}>
            <CartButton />
          </Cart>
        </MockedProvider>
      );

      const cartBtn = getByRole('button');

      fireEvent.click(cartBtn);

      // wait for data fetching to complete
      expect(await screen.findByText(mockRelatedProduct.name)).toBeInTheDocument();
      expect(screen.getByRole('dialog')).toMatchInlineSnapshot(`
        <div
          aria-describedby="headlessui-description-5"
          aria-labelledby="headlessui-dialog-title-4"
          aria-modal="true"
          class="relative z-[9000]"
          id="headlessui-dialog-2"
          role="dialog"
        >
          <div
            aria-hidden="true"
            class="fixed inset-0 bg-black opacity-[.35]"
            id="headlessui-dialog-overlay-3"
          />
          <div
            class="fixed top-0 inset-x-0 m-0 md:mt-12 md:mx-auto w-full md:max-w-[960px] h-full md:h-auto"
          >
            <div
              class="w-full h-full rounded overflow-hidden bg-white md:border-4 md:border-solid md:border-gray-400/50"
            >
              <div
                class="border-b-4 border-solid border-gray-400/50 p-4 relative flex items-center justify-between gap-x-1"
                id="headlessui-dialog-title-4"
              >
                <h4
                  class="font-bold text-accent font-secondary"
                >
                  cart.header
                </h4>
                <button
                  aria-label="close"
                  class="w-5 h-5"
                  tabindex="0"
                >
                  <svg
                    class="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="p-4 relative h-[calc(100vh-60px)] md:h-auto md:max-h-[calc(100vh-156px)] overflow-y-auto"
              >
                <div
                  class="flex flex-col divide-y divide-gray-400"
                  id="headlessui-description-5"
                >
                  <div
                    class="flex flex-col"
                  >
                    <div
                      class="py-2 grid grid-cols-4"
                    >
                      <div
                        class="flex flex-row px-4 col-span-full md:col-span-3"
                      >
                        <img
                          class="border border-solid border-gray-300 w-[100px] h-[100px]"
                          height="100"
                          src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          width="100"
                        />
                        <div
                          class="m-2"
                        >
                          <p
                            class="text-gray-800 text-xl mb-2"
                          >
                            Test Product
                          </p>
                          <p
                            class="text-gray-700 text-sm mb-4"
                          >
                            <span>
                              quantity
                               
                              5
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="pl-4 pt-2 col-span-full md:col-span-1 text-right"
                      >
                        <div
                          class="w-full md:w-1/2 md:float-right"
                        >
                          <div
                            class="text-lg font-bold"
                          >
                            $50.00
                          </div>
                          <button
                            class="inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-700 hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
                          >
                            <span
                              class="flex items-center gap-x-1"
                            >
                              <i
                                aria-label="delete"
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
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  />
                                </svg>
                              </i>
                              remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col"
                  >
                    <div
                      class="py-2 grid grid-cols-4"
                    >
                      <div
                        class="flex flex-row px-4 col-span-full md:col-span-3"
                      >
                        <img
                          class="border border-solid border-gray-300 w-[100px] h-[100px]"
                          height="100"
                          src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          width="100"
                        />
                        <div
                          class="m-2"
                        >
                          <p
                            class="text-gray-800 text-xl mb-2"
                          >
                            Test bundle
                          </p>
                          <p
                            class="text-gray-700 text-sm mb-4"
                          >
                            <span>
                              quantity
                               
                              1
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="pl-4 pt-2 col-span-full md:col-span-1 text-right"
                      >
                        <div
                          class="w-full md:w-1/2 md:float-right"
                        >
                          <div
                            class="text-lg font-bold"
                          >
                            $1.00
                             / 
                            month
                          </div>
                          <button
                            class="inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-700 hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
                          >
                            <span
                              class="flex items-center gap-x-1"
                            >
                              <i
                                aria-label="delete"
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
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  />
                                </svg>
                              </i>
                              remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col"
                  >
                    <div
                      class="py-2 grid grid-cols-4"
                    >
                      <div
                        class="flex flex-row px-4 col-span-full md:col-span-3"
                      >
                        <img
                          class="border border-solid border-gray-300 w-[100px] h-[100px]"
                          height="100"
                          src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          width="100"
                        />
                        <div
                          class="m-2"
                        >
                          <p
                            class="text-gray-800 text-xl mb-2"
                          >
                            Test learning path
                          </p>
                          <p
                            class="text-gray-700 text-sm mb-4"
                          >
                            <span>
                              quantity
                               
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="pl-4 pt-2 col-span-full md:col-span-1 text-right"
                      >
                        <div
                          class="w-full md:w-1/2 md:float-right"
                        >
                          <div
                            class="text-lg font-bold"
                          >
                            $200.00
                          </div>
                          <button
                            class="inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-700 hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
                          >
                            <span
                              class="flex items-center gap-x-1"
                            >
                              <i
                                aria-label="delete"
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
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  />
                                </svg>
                              </i>
                              remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col"
                  >
                    <div
                      class="py-2 grid grid-cols-4"
                    >
                      <div
                        class="flex flex-row px-4 col-span-full md:col-span-3"
                      >
                        <img
                          class="border border-solid border-gray-300 w-[100px] h-[100px]"
                          height="100"
                          src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                          width="100"
                        />
                        <div
                          class="m-2"
                        >
                          <p
                            class="text-gray-800 text-xl mb-2"
                          >
                            Test course
                          </p>
                          <p
                            class="text-gray-700 text-sm mb-4"
                          >
                            <span>
                              quantity
                               
                              1
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="pl-4 pt-2 col-span-full md:col-span-1 text-right"
                      >
                        <div
                          class="w-full md:w-1/2 md:float-right"
                        >
                          <div
                            class="text-lg font-bold"
                          >
                            $2.00
                          </div>
                          <button
                            class="inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-700 hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
                          >
                            <span
                              class="flex items-center gap-x-1"
                            >
                              <i
                                aria-label="delete"
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
                                    d="M6 18L18 6M6 6l12 12"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  />
                                </svg>
                              </i>
                              remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-gray-100 mb-4 p-4 md:bg-gradient-to-b md:from-white md:to-gray-100 grid grid-cols-3 gap-8"
                    >
                      <div
                        class="col-span-full md:col-span-2"
                      >
                        <div
                          class="grid grid-cols-12"
                        >
                          <div
                            class="col-span-2 md:col-span-3 px-4"
                          >
                            <span
                              class="block pt-3 md:pt-0 rounded-full md:border-2 md:border-solid md:border-accent md:bg-white flex justify-center items-center md:w-20 md:h-20"
                            >
                              <i
                                aria-label="business user"
                                class="w-10 f-10 md:w-8 md:h-8"
                              >
                                <svg
                                  class="w-full h-full"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 82 82"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M45.525,40.357l-3.041,6.492h-3.613l-3.141-6.492c0-0.623,0.504-1.125,1.127-1.125H44.4 C45.021,39.233,45.525,39.735,45.525,40.357z M42.146,47.527h-3.039c-0.119,0-0.217,0.09-0.225,0.209l-1.465,22.404 c-0.002,0.049,0.01,0.096,0.035,0.135l2.928,4.617c0.041,0.064,0.111,0.104,0.186,0.104c0.002,0,0.004,0,0.006,0 c0.074,0,0.143-0.035,0.186-0.101l3.152-4.613c0.027-0.043,0.043-0.092,0.037-0.145l-1.574-22.402 C42.362,47.617,42.266,47.527,42.146,47.527z M40.509,34.434c9.506,0,17.215-7.709,17.215-17.217S50.016,0,40.509,0 C31,0,23.292,7.709,23.292,17.217S31,34.434,40.509,34.434z M69.854,57.648v17.869h-0.121l-1.15,0.584 C68,76.395,58.609,81.016,42.41,81.016c-8.295,0-18.373-1.211-29.971-4.834l-1.232-0.385l-0.045-0.279V57.648 c0-12.154,9.889-22.042,22.041-22.042h14.607C59.967,35.606,69.854,45.494,69.854,57.648z M67.508,57.648 c0-10.858-8.836-19.695-19.697-19.695H33.202c-10.859,0-19.693,8.836-19.693,19.695V73.17l-0.008,0.549 c33.254,10.385,53.762,0.184,53.969,0.078l0.037-0.627V57.648z"
                                  />
                                </svg>
                              </i>
                            </span>
                          </div>
                          <div
                            class="col-span-10 md:col-span-9"
                          >
                            <p
                              class="leading-6 text-gray-800 text-base font-bold my-2"
                            >
                              cart.instructor-access-headline
                            </p>
                            <p
                              class="leading-4 text-gray-700 text-xs font-normal"
                            >
                              cart.instructor-access-body
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-span-full md:col-span-1 flex flex-row-reverse md:flex-col items-end gap-4 md:gap-2"
                      >
                        <span>
                          $3.00
                        </span>
                        <button
                          class="py-1 px-2 inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover"
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
                            cart.add-instructor-button
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="border-solid border-t-2 border-accent text-accent text-xl bg-gray-100 text-right p-4"
                >
                  <span
                    class="text-black font-semibold"
                  >
                    total-due-now
                  </span>
                   
                  $253.00
                </div>
                <div
                  class="flex flex-col-reverse md:flex-row justify-end gap-2 py-4"
                >
                  <button
                    class="py-2 px-4 inline-block text-sm font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-800 bg-gray-100 border border-solid border-gray-400 hover:border-gray-600 hover:text-gray-600 hover:bg-white"
                  >
                    product.continue
                  </button>
                  <button
                    class="py-2 px-4 inline-block text-sm font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover"
                  >
                    cart.checkout
                  </button>
                </div>
                <div
                  class="px-4"
                >
                  <span
                    class="text-lg text-accent"
                  >
                    relatedProducts.checkout
                  </span>
                  <ul
                    class="ml-8 mb-4 flex flex-col"
                  >
                    <li>
                      <div
                        class="py-2 border-b border-solid border-gray-300 grid grid-cols-4"
                      >
                        <div
                          class="px-4 flex flex-row col-span-full md:col-span-3"
                        >
                          <img
                            alt="Test product 2"
                            class="border border-solid border-gray-300 w-[75px] h-[75px]"
                            height="75"
                            src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"
                            width="75"
                          />
                          <p
                            class="m-2 text-lg leading-tight"
                          >
                            Test product 2
                          </p>
                        </div>
                        <div
                          class="pl-4 pt-2 col-span-full md:col-span-1 text-right"
                        >
                          <div>
                            <div
                              class="price flex flex-row md:flex-col justify-end gap-0.5"
                            >
                              <span
                                class="text-base text-accent"
                              >
                                $25.00
                              </span>
                              <span
                                class="text-gray-700 line-through text-sm"
                              >
                                $20.00
                              </span>
                            </div>
                            <button
                              class="py-1 px-3 mb-4 inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover"
                            >
                              product.add-to-cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
