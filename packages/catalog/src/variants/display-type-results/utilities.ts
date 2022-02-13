const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export const priceFormat = (priceInCents: number) => formatter.format(priceInCents / 100);
