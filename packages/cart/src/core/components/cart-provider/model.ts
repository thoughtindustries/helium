import { Cart, CartItem, EcommItemType } from './types';

export default class CartModel {
  private _items: CartItem[] = [];
  private _id: string | undefined;

  constructor({ id, items }: Cart) {
    this._id = id;
    this._items = [...items];
  }

  private _findExistingItemIndex({ purchasableId, purchasableType }: CartItem) {
    return this._items.findIndex(
      ({ purchasableId: existingPurchasableId, purchasableType: existingPurchasableType }) => {
        if (purchasableType === EcommItemType.Bundle) {
          // can only add one bundle to a cart at a time
          // it really doesn't make sense purchasing more than one bundle at a time,
          // plus supporting this would make checkout code much trickier than it already is.
          return existingPurchasableType === purchasableType;
        } else {
          // looking for same ID & Type
          return (
            existingPurchasableId === purchasableId && existingPurchasableType === purchasableType
          );
        }
      }
    );
  }

  addItem(item: CartItem) {
    const existingItemIndex = this._findExistingItemIndex(item);

    if (existingItemIndex) {
      const existingItem = this._items[existingItemIndex];
      if (existingItem.purchasableType === EcommItemType.Product) {
        // products can have quantities
        existingItem.quantity += 1;
      } else {
        // replace old with new
        this._items.splice(existingItemIndex);
        this._items.push(item);
      }
    } else {
      this._items.push(item);
    }

    return existingItemIndex === -1;
  }

  serialization() {
    return this._items.map(
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
  }

  // TODO: omit totalDueNow (relates to currency code), should be added to styled component CartModal
}
