export const pagination = (items: any): string[][] => {
  const limitItems = 12;
  const result = [];
  for (let i = 0; i < items?.length; i += limitItems) {
    result.push(items.slice(i, i + limitItems));
  }
  return result;
};
