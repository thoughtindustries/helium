The `useCartUI` hook provides access to the cart UI context. It must be a descendent of a `CartUIProvider` component.

## Example code

```tsx
import {CartUIProvider, useCartUI} from '@thoughtindustries/cart';

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

## Return value

The `useCartUI` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `isCartOpen`                    | Yes      | Boolean value indicating if the cart (modal) is open. |
| `openCart`                      | Yes      | A callback to open cart. |
| `closeCart`                     | Yes      | A callback to close cart. |
| `toggleCart`                    | Yes      | A callback to toggle cart to open or to close. |

## Related components

- [`CartUIProvider`](./cart-ui-provider.md)
