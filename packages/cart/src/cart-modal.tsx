import React, { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import {
  CartItem,
  useCart,
  useCartUI,
  CartCheckoutButton,
  AddToCartButton,
  useRelatedProductsQuery,
  EcommItemType
} from './core';
import { useTranslation } from 'react-i18next';
import { LoadingDots } from '@thoughtindustries/content';

type RelatedProductsQueryVariables = {
  productIds: string[];
  courseIds: string[];
};
const RelatedItemsUpsell = ({ items }: { items: CartItem[] }) => {
  const variables = items.reduce(
    (prev, { purchasableId, purchasableType }) => {
      if (purchasableType === EcommItemType.Product) {
        prev.productIds.push(purchasableId);
      } else if (purchasableType === EcommItemType.Course) {
        prev.courseIds.push(purchasableId);
      }
      return prev;
    },
    { productIds: [], courseIds: [] } as RelatedProductsQueryVariables
  );
  const { data, error, loading } = useRelatedProductsQuery({ variables });
  if (loading) {
    return <LoadingDots />;
  }

  if (error || !data) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.RelatedProducts.map((product, key) => {
          const props = {
            purchasableType: EcommItemType.Product,
            purchasable: product,
            isMobile: false
          };
          return (
            <li key={key}>
              <h3>Name: {product.name}</h3>
              <AddToCartButton {...props}>Add item</AddToCartButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Item = ({ title, quantity }: CartItem) => (
  <div>
    <h3>Title: {title}</h3>
    <span>quantity: {quantity}</span>
  </div>
);

const CartModal = (): JSX.Element => {
  const { items, removeItem } = useCart();
  const { isCartOpen, closeCart } = useCartUI();
  const { t } = useTranslation();
  const checkoutButtonRef = useRef(null);

  // derived values
  const itemCount = items.length;
  const hasItems = !!itemCount;

  return (
    <>
      <div
        className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
          isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={isCartOpen ? closeCart : undefined}
      />
      <Dialog open={isCartOpen} onClose={closeCart} initialFocus={checkoutButtonRef}>
        <Dialog.Overlay className="fixed z-20 inset-0 bg-gray-50 opacity-75" />
        <div
          className={`absolute flex flex-col md:block z-20 top-0 left-0 right-0 bottom-0 md:top-7 h-full md:left-auto md:right-7 md:bottom-auto md:h-auto md:max-h-[calc(100vh-56px)] bg-gray-50 w-full md:w-[470px] rounded-b-lg shadow-2xl ${
            hasItems ? 'overflow-hidden' : 'overflow-y-scroll'
          }`}
        >
          <Dialog.Title>{t('cart.header', { count: items.length })}</Dialog.Title>
          <Dialog.Description as="div">
            {!hasItems && t('cart.empty')}
            {hasItems && (
              <div>
                <ul>
                  {items.map((item, key) => (
                    <li key={key}>
                      <Item {...item} />
                      <button onClick={() => removeItem(item)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Dialog.Description>
          <div>
            <button onClick={closeCart}>{t('product.continue')}</button>
            {hasItems && (
              <CartCheckoutButton className="focus:bg-red-700" ref={checkoutButtonRef}>
                {t('cart.checkout')}
              </CartCheckoutButton>
            )}
          </div>
          <RelatedItemsUpsell items={items} />
        </div>
      </Dialog>
    </>
  );
};

CartModal.displayName = 'CartModal';
export default CartModal;
