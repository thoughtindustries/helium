import React, { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { useCart, useCartUI, CartCheckoutButton } from './core';
import { useTranslation } from 'react-i18next';

const CartModal = (): JSX.Element => {
  const { items } = useCart();
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
            {hasItems && <div>TODO: render cart items</div>}
          </Dialog.Description>
          <div>
            <button onClick={closeCart}>{t('product.continue')}</button>
            {hasItems && (
              <CartCheckoutButton className="focus:bg-red-700" ref={checkoutButtonRef}>
                {t('cart.checkout')}
              </CartCheckoutButton>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

CartModal.displayName = 'CartModal';
export default CartModal;
