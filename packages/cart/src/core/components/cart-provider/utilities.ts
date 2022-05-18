import { CART_ID } from './constants';
import { Cart } from './types';

export const parseCartCookie = (cookie?: string): Cart => {
  const defaultCart: Cart = { id: CART_ID, items: [] };
  if (!cookie) {
    return defaultCart;
  }

  try {
    const base64Url = cookie.split('.')[0];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const { cartItems: items = [] } = JSON.parse(window.atob(base64));
    // const ret = JSON.parse(Buffer.from(cookie, 'base64').toString('utf8'));
    return {
      ...defaultCart,
      items
    };
  } catch (e) {
    return defaultCart;
  }
};

export const serializeCart = (cart: Cart): string => {
  const clonedCart = {
    id: CART_ID,
    cartItems: [...cart.items]
  };
  // return Buffer.from(JSON.stringify(clonedCart)).toString('base64');
  return window.btoa(JSON.stringify(clonedCart));
};
