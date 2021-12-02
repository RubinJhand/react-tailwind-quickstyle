type Classes = (false | null | undefined | string)[];

export const classNames = (...classes: Classes) => {
  return classes.filter(Boolean).join(' ');
};
