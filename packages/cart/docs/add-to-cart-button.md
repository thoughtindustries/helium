The `AddToCartButton` component renders a button that adds a purchaseable item to the cart when pressed. With additional props, it will follow up with step to either open the cart modal or take the user directly to the checkout flow. It must be a descendent of the `CartUIProvider` component.

## Example code

```tsx
import {CartUIProvider, AddToCartButton, EcommItemType} from '@thoughtindustries/cart';

export function MyComponent() {
  // ...

  return (
    <CartUIProvider checkoutUrl="/checkout">
      <AddToCartButton
        purchasableType={EcommItemType.Product}
        purchasable={{id:'product-uuid', priceInCents:1000}}
      >
        Add to Cart
      </AddToCartButton>
    </CartUIProvider>
  );
}
```

## Props

| Name                         | Type                                        | Description                                                                                                                                                   |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children                     | <code>ReactNode</code>                      | Any ReactNode elements. |
| shouldOpenCart?              | <code>boolean</code>                        | Option to open cart modal as a follow-up action. |
| purchasableType              | <code>EcommItemType</code>                  | Type of purchaseable item (one of the ecommerce item type). |
| purchasable                  | <code>PurchaseableItem</code>               | Object of the purchaseable item. |
| coupon?                      | <code>Coupon</code>                         | Optional coupon object. |
| interval?                    | <code>CartItemInterval</code>               | Optional payment interval (one of the interval type). |
| quantity?                    | <code>number</code>                         | Optional quantity (a default value will be applied when not sepcified). |
| buttonRef?                   | <code>Ref<<wbr>HTMLButtonElement<wbr>> </code>                | A reference to the underlying button. |

## Related components

- [`CartUIProvider`](./cart-ui-provider.md)
- [`CartProvider`](./cart-provider.md)

## Related hooks

- [`useCartUI`](./use-cart-ui.md)
- [`useCart`](./use-cart.md)
- [`useCartCheckout`](./use-cart-checkout.md)
