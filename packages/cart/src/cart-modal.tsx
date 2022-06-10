import React from 'react';
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import {
  CartItem,
  useCart,
  useCartUI,
  CartCheckoutButton,
  AddToCartButton,
  useRelatedProductsQuery,
  EcommItemType,
  CartContextType,
  VariationLabel,
  getCartItemTotalDueNow,
  getCartTotalDueNow
} from './core';
import { useTranslation } from 'react-i18next';
import { LoadingDots } from '@thoughtindustries/content';
import { CartProps, PriceFormatFn } from './types';
import { DEFAULT_CURRENCY_CODE, DEFAULT_LOCALE } from './constants';
import { BusinessUserIcon, CloseIcon, PlusIcon } from './icons';

type RelatedProductsQueryVariables = {
  productIds: string[];
  courseIds: string[];
};
type RelatedItemsUpsellProps = {
  items: CartItem[];
  priceFormatFn: PriceFormatFn;
};
const RelatedItemsUpsell = ({ items, priceFormatFn }: RelatedItemsUpsellProps) => {
  const { t } = useTranslation();
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

  if (error || !data || !data.RelatedProducts.length) {
    return null;
  }

  return (
    <>
      <span className="text-lg text-accent">{t('relatedProducts.checkout')}</span>
      <ul className="ml-8 mb-4 flex flex-col">
        {data.RelatedProducts.map((product, key) => {
          const { asset, name, suggestedRetailPriceInCents, priceInCents } = product;
          const buttonProps = {
            purchasableType: EcommItemType.Product,
            purchasable: product,
            className:
              'py-1 px-3 mb-4 inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover'
          };
          return (
            <li key={key}>
              <div className="py-2 border-b border-solid border-gray-300 grid grid-cols-4">
                <div className="px-4 flex flex-row col-span-full md:col-span-3">
                  <ItemAssetBlock
                    asset={asset}
                    name={name}
                    width={75}
                    height={75}
                    classnames="w-[75px] h-[75px]"
                  />
                  <p className="m-2 text-lg leading-tight">{name}</p>
                </div>
                <div className="pl-4 pt-2 col-span-full md:col-span-1 text-right">
                  <div>
                    <div className="price flex flex-row md:flex-col justify-end gap-0.5">
                      {priceInCents && (
                        <span className="text-base text-accent">{priceFormatFn(priceInCents)}</span>
                      )}
                      {suggestedRetailPriceInCents && (
                        <span className="text-gray-700 line-through text-sm">
                          {priceFormatFn(suggestedRetailPriceInCents)}
                        </span>
                      )}
                    </div>
                    <AddToCartButton {...buttonProps}>{t('product.add-to-cart')}</AddToCartButton>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

type ItemAssetBlockProps = {
  asset?: string;
  name?: string;
  classnames?: string;
  width: number;
  height: number;
};
const ItemAssetBlock = ({ asset, name, classnames = '', width, height }: ItemAssetBlockProps) => (
  <img
    className={clsx('border border-solid border-gray-300', classnames)}
    width={width}
    height={height}
    alt={name}
    src={
      asset ||
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png'
    }
  />
);

type ItemProps = {
  item: CartItem;
  priceFormatFn: PriceFormatFn;
  removeItem: CartContextType['removeItem'];
  toggleItemInstructorAccess: CartContextType['toggleItemInstructorAccess'];
};
const Item = ({ item, priceFormatFn, removeItem, toggleItemInstructorAccess }: ItemProps) => {
  const {
    title,
    asset,
    quantity,
    couponCode,
    instructorAccessPriceInCents,
    interval,
    variationLabel
  } = item;
  const { t } = useTranslation();

  // derived values
  const instructorAccessSelected = variationLabel === VariationLabel.WithInstructorAccess;
  const totalDueNow = getCartItemTotalDueNow(item);

  return (
    <div className="flex flex-col">
      <div className="py-2 grid grid-cols-4">
        <div className="flex flex-row px-4 col-span-full md:col-span-3">
          <ItemAssetBlock asset={asset} width={100} height={100} classnames="w-[100px] h-[100px]" />
          <div className="m-2">
            <p className="text-gray-800 text-xl mb-2">{title}</p>
            <p className="text-gray-700 text-sm mb-4">
              <span>
                {t('quantity')} {quantity}
              </span>
              {couponCode && (
                <>
                  {' '}
                  /{' '}
                  <span>
                    {t('cart.coupon')} {couponCode}
                  </span>
                </>
              )}
            </p>
            {instructorAccessSelected && (
              <div>
                <span className="text-gray-700 text-sm">{t('cart.instructor-access-added')}</span>
                <button
                  onClick={() => toggleItemInstructorAccess(item)}
                  className="btn btn--link btn--primary text-sm ml-2 transition-colors ease-in-out duration-200 text-accent hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
                >
                  {t('undo')}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="pl-4 pt-2 col-span-full md:col-span-1 text-right">
          <div className="w-full md:w-1/2 md:float-right">
            <div className="text-lg font-bold">
              {priceFormatFn(totalDueNow)}
              {interval && <> / {interval}</>}
            </div>
            <button
              onClick={() => removeItem(item)}
              className="inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-700 hover:text-blue-700 focus:outline focus:outline-1 focus:outline-blue-500 focus:shadow focus:shadow-blue-500"
            >
              <span className="flex items-center gap-x-1">
                <i className="inline-block w-3 h-3" aria-label="delete">
                  <CloseIcon />
                </i>
                {t('remove')}
              </span>
            </button>
          </div>
        </div>
      </div>
      {!instructorAccessSelected && instructorAccessPriceInCents && (
        <div className="bg-gray-100 mb-4 p-4 md:bg-gradient-to-b md:from-white md:to-gray-100 grid grid-cols-3 gap-8">
          <div className="col-span-full md:col-span-2">
            <div className="grid grid-cols-12">
              <div className="col-span-2 md:col-span-3 px-4">
                <span className="block pt-3 md:pt-0 rounded-full md:border-2 md:border-solid md:border-accent md:bg-white flex justify-center items-center md:w-20 md:h-20">
                  <i className="w-10 f-10 md:w-8 md:h-8" aria-label="business user">
                    <BusinessUserIcon />
                  </i>
                </span>
              </div>
              <div className="col-span-10 md:col-span-9">
                <p className="leading-6 text-gray-800 text-base font-bold my-2">
                  {t('cart.instructor-access-headline')}
                </p>
                <p className="leading-4 text-gray-700 text-xs font-normal">
                  {t('cart.instructor-access-body')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 flex flex-row-reverse md:flex-col items-end gap-4 md:gap-2">
            <span>{priceFormatFn(instructorAccessPriceInCents)}</span>
            <button
              onClick={() => toggleItemInstructorAccess(item)}
              className="py-1 px-2 inline-block text-xs font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover"
            >
              <span className="flex items-center gap-x-1">
                <i className="inline-block w-3 h-3" aria-label="plus">
                  <PlusIcon />
                </i>
                {t('cart.add-instructor-button')}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

type CartModalProps = Pick<CartProps, 'priceFormat' | 'companyDefaultLocale' | 'currencyCode'>;
const CartModal = ({
  priceFormat,
  companyDefaultLocale,
  currencyCode
}: CartModalProps): JSX.Element => {
  const { items, removeItem, toggleItemInstructorAccess } = useCart();
  const { isCartOpen, closeCart } = useCartUI();
  const { t } = useTranslation();

  // derived values
  const itemCount = items.length;
  const hasItems = !!itemCount;
  const totalDueNow = getCartTotalDueNow(items);
  let priceFormatFn: PriceFormatFn;
  if (!priceFormat) {
    const locale = companyDefaultLocale ?? DEFAULT_LOCALE;
    const currency = currencyCode ?? DEFAULT_CURRENCY_CODE;
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    });
    priceFormatFn = (priceInCents: number) => formatter.format(priceInCents / 100);
  } else {
    priceFormatFn = priceFormat;
  }

  return (
    <Dialog className="relative z-[9000]" open={isCartOpen} onClose={closeCart}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-[.35]" aria-hidden="true" />

      <div className="fixed top-0 inset-x-0 m-0 md:mt-12 md:mx-auto w-full md:max-w-[960px] h-full md:h-auto">
        <div className="w-full h-full rounded overflow-hidden bg-white md:border-4 md:border-solid md:border-gray-400/50">
          <Dialog.Title
            as="div"
            className="border-b-4 border-solid border-gray-400/50 p-4 relative flex items-center justify-between gap-x-1"
          >
            <h4 className="font-bold text-accent font-secondary">
              {t('cart.header', { count: items.length })}
            </h4>
            <button className="w-5 h-5" aria-label="close" onClick={closeCart}>
              <CloseIcon />
            </button>
          </Dialog.Title>
          <div className="p-4 relative h-[calc(100vh-60px)] md:h-auto md:max-h-[calc(100vh-156px)] overflow-y-auto">
            <Dialog.Description as="div" className="flex flex-col divide-y divide-gray-400">
              {!hasItems && t('cart.empty')}
              {hasItems &&
                items.map((item, key) => (
                  <Item
                    key={key}
                    item={item}
                    priceFormatFn={priceFormatFn}
                    removeItem={removeItem}
                    toggleItemInstructorAccess={toggleItemInstructorAccess}
                  />
                ))}
            </Dialog.Description>
            {hasItems && (
              <div className="border-solid border-t-2 border-accent text-accent text-xl bg-gray-100 text-right p-4">
                <span className="text-black font-semibold">{t('total')}</span>{' '}
                {priceFormatFn(totalDueNow)}
              </div>
            )}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-2 py-4">
              <button
                onClick={closeCart}
                className="py-2 px-4 inline-block text-sm font-normal leading-normal relative transition-colors ease-in-out duration-200 text-gray-800 bg-gray-100 border border-solid border-gray-400 hover:border-gray-600 hover:text-gray-600 hover:bg-white"
              >
                {t('product.continue')}
              </button>
              {hasItems && (
                <CartCheckoutButton className="py-2 px-4 inline-block text-sm font-normal leading-normal relative transition-colors ease-in-out duration-200 text-accent-contrast bg-accent border border-solid border-accent hover:border-accent-hover hover:bg-accent-hover">
                  {t('cart.checkout')}
                </CartCheckoutButton>
              )}
            </div>
            <div className="px-4">
              <RelatedItemsUpsell items={items} priceFormatFn={priceFormatFn} />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

CartModal.displayName = 'CartModal';
export default CartModal;
