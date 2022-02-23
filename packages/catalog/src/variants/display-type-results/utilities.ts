const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export const priceFormat = (priceInCents: number) => formatter.format(priceInCents / 100);

export const limitText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};
