import React from 'react';
import { ProductProps } from './types';
import { ProductsFragmentFragment } from '../../graphql';

const Product = (props: ProductProps): JSX.Element => {
  const { products } = props;

  const handleFormatPrice = (value: number) => {
    const resultingPrice = (value / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return resultingPrice;
  };

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
                      {handleFormatPrice(product.alternativePricingRef as number)}
                    </span>
                    <span className="text-gray-500 line-through">
                      {handleFormatPrice(product.priceInCents as number)}
                    </span>
                  </div>
                ) : (
                  <span className="font-normal text-base leading-6 mr-2">
                    {handleFormatPrice(product.priceInCents as number)}
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
