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

## Props

| Name     | Type                          | Description               |
| -------- | ----------------------------- | ------------------------- |
| children | <code>ReactNode</code>        | Any `ReactNode` elements. |
| checkoutUrl     | <code>string</code> | The URL for the checkout for this cart.       |
| priceFormat?     | <code>(priceInCents: number) => string</code> | A callback that is invoked to format monetary value with currency. It takes a number value for the price in cent unit and return the formatted value. Default value uses `Intl.NumberFormat` with props `companyDefaultLocale` and/or `currencyCode` to enable locale-specific currency formatting. |
| companyDefaultLocale?     | <code>string</code> | A locale value to format price when prop `priceFormat` is not specified. Used to speficy the locale in `Intl.NumberFormat`. Default to `en-US`.  |
| currencyCode?     | <code>string</code> | A currency code value to format price when prop `priceFormat` is not specified. Used to speficy the currency code in `Intl.NumberFormat`. Default to `USD`. |

## Related components

- [`CartUIProvider`](./docs/cart-ui-provider.md)
- [`CartProvider`](./docs/cart-provider.md)
- [`AddToCartButton`](./docs/add-to-cart-button.md)
- [`CartCheckoutButton`](./docs/cart-checkout-button.md)

## Related hooks

- [`useUICart`](./docs/use-ui-cart.md)
- [`useCart`](./docs/use-cart.md)
- [`useCartCgeckout`](./docs/use-cart-checkout.md)
