# `@thoughtindustries/cart`

> TODO: add description

## Import component

```
import { CartButton, Cart } from '@thoughtindustries/cart';
```

## Usage

```
# Cart takes a checkout url to handle the checkout redirection, and optional properties to customize price formatting. It provides access to UI behavior (like: to toggle cart modal) and access to manage a local cart object.

# CartButton is a client component that displays the current item count in the cart, and handle click event to toggle the cart modal.

<Cart checkoutUrl="/checkout">
  <CartButton />
</Cart>

# When used with optional properties to customize price formatting
const priceFormat = (priceInCents) => {
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  return formatter.format(priceInCents / 100);
}
<Cart checkoutUrl="/checkout" priceFormat={priceFormat}>
  <CartButton />
</Cart>
```
