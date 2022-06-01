# `@thoughtindustries/cart`

> TODO: add description

## Import component

```
import { CartButton, Cart } from '@thoughtindustries/cart';
```

## Usage

```
# Cart takes a checkout url to handle the checkout redirection. It provides access to UI behavior (like: to toggle cart modal) and access to manage a local cart object.

# CartButton is a client component that displays the current item count in the cart, and handle click event to toggle the cart modal.

<Cart checkoutUrl="/checkout">
  <CartButton />
</Cart>
```
