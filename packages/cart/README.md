# `@thoughtindustries/cart`

> TODO: add description

## Import component

```
import { CartUIProvider, CartButton, CartModal } from '@thoughtindustries/cart';
```

## Usage

```
# CartUIProvider takes a checkout url to handle the checkout redirection. It provides access to UI behavior (like: to toggle cart modal) and access to manage a local cart object.

# CartButton is a client component that displays the current item count in the cart, and handle click event to toggle the cart modal.

# CartModal is a client component that displays all items in the cart and any upsell items. From there, user can adjust item removal and addition, as well as options to continue shopping and/or continue to checkout.

<CartUIProvider checkoutUrl="/checkout">
  <CartButton />
  <CartModal />
</CatalogProvider>
```
