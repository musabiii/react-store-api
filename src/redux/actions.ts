import { actions, productType, sortType } from "../types";

export {};

export const adjustqty = (id: number, qty: number) => {
  return {
    type: actions.ADJUST_QTY,
    payload: {
      id,
      qty,
    },
  };
};


export const setFilterFrom = (from:number) => {
  return {
    type:actions.SET_FILTER_FROM,
    payload:from
  }
}

export const setFilterTill = (till:number) => {
  return {
    type:actions.SET_FILTER_TILL,
    payload:till
  }
}

export const setSort = (sort:sortType) => {
  return {
    type:actions.SET_SORT,
    payload:sort
  }
}