# Core cart hooks

Core cart hooks are functions that allow you to use state and other methods inside cart components.

## useCartCheckout

The `useCartCheckout` hook provides access to the cart checkout process. It must be a descendent of a `CartProvider` component.

### Example code

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

### Return value

The `useCartCheckout` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `isCheckoutRequested`           | Yes      | This indicates if the cart checkout process has already requested. |
| `startCheckout`                 | Yes      | A callback that starts the cart checkout process. |

### Related hooks

- [`useCart`](#usecart)

## useCartUI

The `useCartUI` hook provides access to the cart UI context. It must be a descendent of a `CartUIProvider` component.

### Example code

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

### Return value

The `useCartUI` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `isCartOpen`                    | Yes      | Boolean value indicating if the cart (modal) is open. |
| `openCart`                      | Yes      | A callback to open cart. |
| `closeCart`                     | Yes      | A callback to close cart. |
| `toggleCart`                    | Yes      | A callback to toggle cart to open or to close. |

### Related components

- [`CartUIProvider`](../components/README.md#cartuiprovider)

## useCart

The `useCart` hook provides access to the cart object. It must be a descendent of a `CartProvider` component.

### Example code

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

### Return value

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

### Related components

- [`CartProvider`](../components/README.md#cartprovider)
