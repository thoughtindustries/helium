The `useCartCheckout` hook provides access to the cart checkout process. It must be a descendent of a `CartProvider` component.

## Example code

```tsx
import {CartProvider, useCartCheckout} from '@thoughtindustries/cart';

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

## Return value

The `useCartCheckout` hook returns an object with the following keys:

| Name                            | Description |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isCheckoutRequested`           | This indicates if the cart checkout process has already requested. |
| `startCheckout`                 | A callback that starts the cart checkout process. |

## Related hooks

- [`useCart`](./use-cart.md)
