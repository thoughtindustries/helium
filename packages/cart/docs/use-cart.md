The `useCart` hook provides access to the cart object. It must be a descendent of a `CartProvider` component.

## Example code

```tsx
import {CartProvider, useCart} from '@thoughtindustries/cart';

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

## Return value

The `useCart` hook returns an object with the following keys:

| Name                            | Description |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                         | The cart items. |
| `checkoutUrl`                   | The URL for the checkout for this cart. |
| `isInitialized`                 | This indicates if the cart is initialized. The initialization process will trigger once the `CartProvider` component is mounted. |
| `addPurchaseableItem`           | A callback that adds purchaseable item to the cart. Expects the `AddPurchaseableItemPayload` input. |
| `removeItem`                    | A callback that removes item from the cart. Expects the `CartItem` input. |
| `toggleItemInstructorAccess`    | A callback that updates item variation label for instructor access in the cart. Expects the `CartItem`. |
| `totalQuantity`                 | The total number of items in the cart, across all items. If there are no items, then the value is 0. |

## Related components

- [`CartProvider`](./cart-provider.md)
