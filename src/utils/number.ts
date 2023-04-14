const isNumber = (val: any) => typeof val === 'number' && val === val;

export const priceFormatter = (value?: number, currency = '$') => {
  if (value && isNumber(value)) {
    return value >= 0
      ? `${currency}${String(value).replace(/(,)(?=(\d{3})+$)/g, '$1.')}`
      : `-${currency}${String(Math.abs(value)).replace(
          /(,)(?=(\d{3})+$)/g,
          '$1.',
        )}`;
  }
  return `${currency}${value || 0}`;
};
