# Core cart components

Core cart components are objects that contain all of business logic for the cart concept that they represent. They're used to parse and process data.

## AddToCartButton

The `AddToCartButton` component renders a button that adds a purchaseable item to the cart when pressed. With additional props, it will follow up with step to either open the cart modal or take the user directly to the checkout flow. It must be a descendent of the `CartUIProvider` component.

### Example code

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

### Props

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

### Related components

- [`CartUIProvider`](#cartuiprovider)
- [`CartProvider`](#cartprovider)

### Related hooks

- [`useCartUI`](../hooks/README.md#usecartui)
- [`useCart`](../hooks/README.md#usecart)
- [`useCartCheckout`](../hooks/README.md#usecartcheckout)

## CartCheckoutButton

The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart. It must be a descendent of a `CartProvider` component.

### Example code

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

### Props

| Name        | Required | Type                   | Description            |
| ----------- | -------- | ---------------------- | ---------------------- |
| children    | Yes      | <code>ReactNode</code> | A `ReactNode` element. |
| buttonRef   | No       | <code>Ref<<wbr>HTMLButtonElement<wbr>> </code>                | A reference to the underlying button. |

### Related components

- [`CartProvider`](#cartprovider)

### Related hooks

- [`useCart`](../hooks/README.md#usecart)
- [`useCartCheckout`](../hooks/README.md#usecartcheckout)

## CartProvider

The `CartProvider` component creates a context for using a cart. It creates a cart object and callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks. 

You must use this component if you want to use the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

### Example code

```tsx
import { CartProvider } from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

### Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | Yes      | <code>string</code> | The URL for the checkout for this cart. |

### Related hooks

- [`useCart`](../hooks/README.md#usecart)

## CartUIProvider

The `CartUIProvider` component defines the behavior that occurs when a user is interacting with a cart (for example, opening or closing it), it also creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCartUI` hook, the `useCart` hook, and related hooks. This component renders the `CartProvider` to provides any of its descendant access to the context of `CartProvider`.

You must use this component if you want to use the `useCartUI` hook, the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

### Example code

```tsx
import { CartUIProvider } from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

### Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------- |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | Yes      | <code>string</code> | The URL for the checkout for this cart. |

### Related components

- [`CartProvider`](#cartprovider)
