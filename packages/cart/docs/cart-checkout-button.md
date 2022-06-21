The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart. It must be a descendent of a `CartProvider` component.

## Example code

```tsx
import {CartCheckoutButton, CartProvider} from '@thoughtindustries/cart';

export class MyComponent() {
  return (
    <CartProvider checkoutUrl="/checkout">
      <CartCheckoutButton>Checkout</CartCheckoutButton>
    </CartProvider>
  )
}
```

## Props

| Name        | Required | Type                   | Description            |
| ----------- | -------- | ---------------------- | ---------------------- |
| children    | Yes      | <code>ReactNode</code> | A `ReactNode` element. |
| buttonRef   | No       | <code>Ref<<wbr>HTMLButtonElement<wbr>> </code>                | A reference to the underlying button. |

## Related components

- [`CartProvider`](./cart-provider.md)

## Related hooks

- [`useCart`](./docs/use-cart.md)
- [`useCartCheckout`](./docs/use-cart-checkout.md)
