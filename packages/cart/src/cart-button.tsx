import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart, useCartUI } from './core';

const CartButton = (): JSX.Element => {
  const { items } = useCart();
  const { toggleCart } = useCartUI();
  const { t } = useTranslation();
  const handleClick = useCallback(() => {
    toggleCart();
  }, []);
  return (
    <button
      className="transition-colors ease-in-out duration-200 leading-normal cursor-pointer text-center text-black hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500 p-4"
      id="cart-button"
      onClick={handleClick}
    >
      {t('header-cart')}
      <span>{`(${items.length})`}</span>
    </button>
  );
};

CartButton.displayName = 'CartButton';
export default CartButton;
