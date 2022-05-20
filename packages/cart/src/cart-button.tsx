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
    <button className="btn btn--bare btn--inherit-font" id="cart-button" onClick={handleClick}>
      {t('header-cart')}
      <span className="badge">({items.length})</span>
    </button>
  );
};

CartButton.displayName = 'CartButton';
export default CartButton;
