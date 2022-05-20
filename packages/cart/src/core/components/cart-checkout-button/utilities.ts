import { CartItem } from '../cart-provider';

export const serializeCartItems = (items: CartItem[]): string => {
  const itemsWithPluckedFields = items.map(
    ({
      purchasableId,
      purchasableType,
      quantity,
      isBulkPurchase,
      couponCode,
      interval,
      variationLabel,
      courses,
      priceInCents
    }) => ({
      purchasableId,
      purchasableType,
      quantity,
      isBulkPurchase,
      couponCode,
      interval,
      variationLabel,
      courses,
      priceInCents: priceInCents || undefined
    })
  );
  return JSON.stringify(itemsWithPluckedFields);
};
