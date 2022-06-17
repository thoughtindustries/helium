The `CartProvider` component creates a context for using a cart. It creates a cart object and callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks. 

You must use this component if you want to use the `useCart` hook or related hooks, or if you would like to use the `AddToCartButton` component.

## Example code

```tsx
import {CartProvider} from '@thoughtindustries/cart';

export function App() {
  return <CartProvider>{/* Your JSX */}</CartProvider>;
}
```

## Props

| Name                   | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children               | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| checkoutUrl            | <code>string</code> | The URL for the checkout for this cart. |

## Related hooks

- [`useCart`](./use-cart.md)
