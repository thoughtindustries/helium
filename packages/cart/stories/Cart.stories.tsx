import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Cart, CartButton, CartItem, CartProps, RelatedProductsDocument } from '../src';
import { CART_COOKIE_NAME } from '../src/core/components/cart-provider/constants';
import { serializeCart } from '../src/core/components/cart-provider/utilities';

export default {
  title: 'Example/Cart',
  component: Cart,
  argTypes: {
    checkoutUrl: {
      name: 'checkoutUrl',
      type: { name: 'string', required: false },
      description: 'URL for checkout link.',
      control: { type: 'text' }
    }
  }
} as Meta;

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
const mockCookie = {
  [CART_COOKIE_NAME]: serializeCart(mockCart)
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
const mockApolloResults = [
  mockApolloResultsFactory(['product-1'], ['course-1'], true),
  mockApolloResultsFactory([], ['course-1'], false),
  mockApolloResultsFactory(['product-1'], [], true),
  mockApolloResultsFactory([], [], false),
  mockApolloResultsFactory(['product-1', 'product-2'], ['course-1'], false),
  mockApolloResultsFactory(['product-1', 'product-2'], [], false),
  mockApolloResultsFactory(['product-2'], ['course-1'], false),
  mockApolloResultsFactory(['product-2'], [], false)
];
// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};

const Template: Story<CartProps> = args => (
  <Cart {...args}>
    <CartButton />
  </Cart>
);

export const Base = Template.bind({});
Base.args = {
  checkoutUrl: '/checkout'
};
Base.parameters = {
  cookie: { ...mockCookie },
  apolloClient: {
    addTypename: false,
    defaultOptions: mockedApolloProviderOptions,
    mocks: mockApolloResults
  }
};
