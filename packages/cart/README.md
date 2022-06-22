# `@thoughtindustries/cart`

> Cart components relate to the merchandise that a customer intends to purchase.

**Table of contents:**

- [`Cart`](#cart)
- [`CartButton`](#cartbutton)
- [Core cart components](#core-cart-components)
  - [`AddToCartButton`](#addtocartbutton)
  - [`CartCheckoutButton`](#cartcheckoutbutton)
  - [`CartUIProvider`](#cartuiprovider)
  - [`CartProvider`](#cartprovider)
- [Core cart hooks](#core-cart-hooks)
  - [`useCartCheckout`](#usecartcheckout)
  - [`useCartUI`](#usecartui)
  - [`useCart`](#usecart)

## Cart

The `Cart` component takes a checkout url to handle the checkout redirection, and optional properties to customize price formatting. It provides access to both UI behavior (like: to toggle cart modal) and callback functions to manage a local cart object.

### Example code

```tsx
import { Cart } from '@thoughtindustries/cart';

export function MyComponent() {
  // ...

  return (
    <Cart checkoutUrl="/checkout">{/* Your JSX */}</Cart>
  );
}
```

## Props

| Name     | Required | Type                          | Description               |
| -------- | -------- | ----------------------------- | ------------------------- |
| children | Yes | <code>ReactNode</code>        | Any `ReactNode` elements. |
| checkoutUrl     | Yes | <code>string</code> | The URL for the checkout for this cart.       |
| priceFormat     | No | <code>(priceInCents: number) => string</code> | A callback that is invoked to format monetary value with currency. It takes a number value for the price in cent unit and return the formatted value. Default value uses `Intl.NumberFormat` with props `companyDefaultLocale` and/or `currencyCode` to enable locale-specific currency formatting. |
| companyDefaultLocale     | No | <code>string</code> | A locale value to format price when prop `priceFormat` is not specified. Used to speficy the locale in `Intl.NumberFormat`. Default to `en-US`.  |
| currencyCode     | No | <code>string</code> | A currency code value to format price when prop `priceFormat` is not specified. Used to speficy the currency code in `Intl.NumberFormat`. Default to `USD`. |

## CartButton

The `CartButton` component is a client component that displays the current item count in the cart, and handle click event to toggle the cart modal. It must be a descendent of the `Cart` component.

### Example code

```tsx
import { Cart, CartButton } from '@thoughtindustries/cart';

export function MyComponent() {
  // ...

  return (
    <Cart checkoutUrl="/checkout">
      <CartButton />
    </Cart>
  );
}
```

### Related components

- [`Cart`](#cart)

## Core cart components

Core cart components are objects that contain all of business logic for the cart concept that they represent. They're used to parse and process data.

### AddToCartButton

The `AddToCartButton` component renders a button that adds a purchaseable item to the cart when pressed. With additional props, it will follow up with step to either open the cart modal or take the user directly to the checkout flow. It must be a descendent of the `CartUIProvider` component.

#### Example code

```tsx
import { CartUIProvider, AddToCartButton, EcommItemType } from '@thoughtindustries/cart';

export function MyComponent() {
  // ...

  return (
    <CartUIProvider checkoutUrl="/checkout">
      <AddToCartButton
        purchasableType={EcommItemType.Product}
        purchasable={{id:'product-uuid', priceInCents:1000}}
      >
        Add to Cart
      </AddToCartButton>
    </CartUIProvider>
  );
}
```

#### Props

| Name                         | Required | Type                                        | Description |
| ---------------------------- | -------- | ------------------------------------------- | ----------- |
| children                     | Yes      | <code>ReactNode</code>                      | Any ReactNode elements. |
| shouldOpenCart               | No       | <code>boolean</code>                        | Option to open cart modal as a follow-up action. |
| purchasableType              | Yes      | <code>EcommItemType</code>                  | Type of purchaseable item (one of the ecommerce item type). |
| purchasable                  | Yes      | <code>PurchaseableItem</code>               | Object of the purchaseable item. |
| coupon                       | No       | <code>Coupon</code>                         | Optional coupon object. |
| interval                     | No       | <code>CartItemInterval</code>               | Optional payment interval (one of the interval type). |
| quantity                     | No       | <code>number</code>                         | Optional quantity (a default value will be applied when not sepcified). |
| buttonRef                    | No       | <code>Ref<<wbr>HTMLButtonElement<wbr>> </code>                | A reference to the underlying button. |

#### Related components

- [`CartUIProvider`](#cartuiprovider)
- [`CartProvider`](#cartprovider)

#### Related hooks

- [`useCartUI`](#usecartui)
- [`useCart`](#usecart)
- [`useCartCheckout`](#usecartcheckout)

### CartCheckoutButton

The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart. It must be a descendent of a `CartProvider` component.

#### Example code

```tsx
import { CartCheckoutButton, CartProvider } from '@thoughtindustries/cart';

export function MyComponent() {
  return (
    <CartProvider checkoutUrl="/checkout">
      <CartCheckoutButton>Checkout</CartCheckoutButton>
    </CartProvider>
  )
}
```

#### Props

| Name        | Required | Type                   | Description            |
| ----------- | -------- | ---------------------- | ---------------------- |
| children    | Yes      | <code>ReactNode</code> | A `ReactNode` element. |
| buttonRef   | No       | <code>Ref<<wbr>HTMLButtonElement<wbr>> </code>                | A reference to the underlying button. |

#### Related components

- [`CartProvider`](#cartprovider)

#### Related hooks

- [`useCart`](#usecart)
- [`useCartCheckout`](#usecartcheckout)

### CartProvider

The `CartProvider` component creates a context for using a cart. It creates a cart object and callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks. 

You must use this component if you want to use the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

#### Example code

```tsx
import { CartProvider } from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

#### Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | Yes      | <code>string</code> | The URL for the checkout for this cart. |

#### Related hooks

- [`useCart`](#usecart)

### CartUIProvider

The `CartUIProvider` component defines the behavior that occurs when a user is interacting with a cart (for example, opening or closing it), it also creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCartUI` hook, the `useCart` hook, and related hooks. This component renders the `CartProvider` to provides any of its descendant access to the context of `CartProvider`.

You must use this component if you want to use the `useCartUI` hook, the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

#### Example code

```tsx
import { CartUIProvider } from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

#### Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------- |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | Yes      | <code>string</code> | The URL for the checkout for this cart. |

#### Related components

- [`CartProvider`](#cartprovider)

## Core cart hooks

Core cart hooks are functions that allow you to use state and other methods inside cart components.

### useCartCheckout

The `useCartCheckout` hook provides access to the cart checkout process. It must be a descendent of a `CartProvider` component.

#### Example code

```tsx
import { CartProvider, useCartCheckout } from '@thoughtindustries/cart';

export function MyComponent() {
  return (
    <CartProvider checkoutUrl="/checkout">
      <CartCheckoutButton />
    </CartProvider>
  );
}

export function CartCheckoutButton() {
  const { isCheckoutRequested, startCheckout } = useCartCheckout();

  return (
    <button disabled={isCheckoutRequested} onClick={startCheckout}>
      {/* Your JSX */}
    </button>
  );
}
```

#### Return value

The `useCartCheckout` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `isCheckoutRequested`           | Yes      | This indicates if the cart checkout process has already requested. |
| `startCheckout`                 | Yes      | A callback that starts the cart checkout process. |

#### Related hooks

- [`useCart`](#usecart)

### useCartUI

The `useCartUI` hook provides access to the cart UI context. It must be a descendent of a `CartUIProvider` component.

#### Example code

```tsx
import { CartUIProvider, useCartUI } from '@thoughtindustries/cart';

export function MyComponent() {
  return (
    <CartUIProvider checkoutUrl="/checkout">
      <CartToggle />
    </CartUIProvider>
  );
}

export function CartToggle() {
  const { isCartOpen, openCart } = useCartUI();

  return (
    <button disabled={isCartOpen} onClick={openCart}>
      {/* Your JSX */}
    </button>
  );
}
```

#### Return value

The `useCartUI` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `isCartOpen`                    | Yes      | Boolean value indicating if the cart (modal) is open. |
| `openCart`                      | Yes      | A callback to open cart. |
| `closeCart`                     | Yes      | A callback to close cart. |
| `toggleCart`                    | Yes      | A callback to toggle cart to open or to close. |

#### Related components

- [`CartUIProvider`](#cartuiprovider)

### useCart

The `useCart` hook provides access to the cart object. It must be a descendent of a `CartProvider` component.

#### Example code

```tsx
import { CartProvider, useCart } from '@thoughtindustries/cart';

export function MyComponent() {
  return (
    <CartProvider checkoutUrl="/checkout">
      <CartTotalQuantity />
    </CartProvider>
  );
}

export function CartTotalQuantity() {
  const { totalQuantity } = useCart();

  return (
    <>
      {totalQuantity}
    </>
  );
}
```

#### Return value

The `useCart` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `items`                         | Yes      | The cart items. |
| `checkoutUrl`                   | Yes      | The URL for the checkout for this cart. |
| `isInitialized`                 | Yes      | This indicates if the cart is initialized. The initialization process will trigger once the `CartProvider` component is mounted. |
| `addPurchaseableItem`           | Yes      | A callback that adds purchaseable item to the cart. Expects the `AddPurchaseableItemPayload` input. |
| `removeItem`                    | Yes      | A callback that removes item from the cart. Expects the `CartItem` input. |
| `toggleItemInstructorAccess`    | Yes      | A callback that updates item variation label for instructor access in the cart. Expects the `CartItem`. |
| `totalQuantity`                 | Yes      | The total number of items in the cart, across all items. If there are no items, then the value is 0. |

#### Related components

- [`CartProvider`](#cartprovider)
