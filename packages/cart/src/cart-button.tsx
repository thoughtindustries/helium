import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from './core';

const CartButton = (): JSX.Element => {
  const { items } = useCart();
  const { t } = useTranslation();
  const handleClick = useCallback(() => {
    console.log('clicked');
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
