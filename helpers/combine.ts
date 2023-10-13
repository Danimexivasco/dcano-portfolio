export const combine = (...classes: Array<string | boolean>) => {
  return classes.filter(Boolean).join(" ");
};

