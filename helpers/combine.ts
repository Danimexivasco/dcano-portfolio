import { NullishTypes } from "@/types";

export const combine = (...classes: Array<string | NullishTypes>) => {
  return classes.filter(Boolean).join(" ");
};

