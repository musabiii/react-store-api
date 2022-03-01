import { actions, productType } from "../types";

export {};

export const adjustqty = (product: productType, qty: number) => {
  return {
    type: actions.ADJUST_QTY,
    payload: {
      product,
      qty,
    },
  };
};
