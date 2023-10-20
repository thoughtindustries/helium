import React from 'react';
import { ProductProps } from './types';
import { ProductsFragmentFragment } from '../../graphql';
import { DEFAULT_CURRENCY_CODE, DEFAULT_LOCALE } from '../../constants';

const Product = (props: ProductProps): JSX.Element => {
  const { products, priceFormat, companyDefaultLocale, currencyCode } = props;

  let priceFormatFn = priceFormat;
  if (!priceFormatFn) {
    const locale = companyDefaultLocale ?? DEFAULT_LOCALE;
    const currency = currencyCode ?? DEFAULT_CURRENCY_CODE;
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    });
    priceFormatFn = (priceInCents: number) => formatter.format(priceInCents / 100);
  }

  return (
    <div className="flex flex-wrap gap-5">
      {products &&
        products.length > 0 &&
        products.map((product: ProductsFragmentFragment) => {
          return (
            <div key={product.id} className="w-80 rounded-md shadow-lg">
              <img src={product.asset} alt={product.name} className="rounded-t" />
              <div className="p-10 border border-t-0 rounded-b border-gray-300">
                <h3
                  className="font-semibold text-xl leading-7 break-words mb-2"
                  style={{ wordBreak: 'break-word' }}
                >
                  {product.name}
                </h3>

                {product.alternativePricingRef ? (
                  <div>
                    <span className="font-normal text-base leading-6 mr-2">
                      {priceFormatFn && priceFormatFn(product.alternativePricingRef as number)}
                    </span>
                    <span className="text-gray-500 line-through">
                      {priceFormatFn && priceFormatFn(product.priceInCents as number)}
                    </span>
                  </div>
                ) : (
                  <span className="font-normal text-base leading-6 mr-2">
                    {priceFormatFn && priceFormatFn(product.priceInCents as number)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

Product.displayName = 'Product';

export default Product;
