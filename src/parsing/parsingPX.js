export const parsingPX = (value) => {
  const num = value.slice(0, value.length - 2);
  return Number(num);
};