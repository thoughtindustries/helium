The `CartUIProvider` component defines the behavior that occurs when a user is interacting with a cart (for example, opening or closing it), it also creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCartUI` hook, the `useCart` hook, and related hooks. This component renders the `CartProvider` to provides any of its descendant access to the context of `CartProvider`.

You must use this component if you want to use the `useCartUI` hook, the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

## Example code

```tsx
import {CartUIProvider} from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

## Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------- |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | Yes      | <code>string</code> | The URL for the checkout for this cart. |

## Related components

- [`CartProvider`](./cart-provider.md)
