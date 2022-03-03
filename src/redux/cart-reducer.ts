import { actions, actionType, stateType } from "../types";

const initialState: stateType = {
  cart: [],
};

export const cartReducer = (
  state: stateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case actions.ADJUST_QTY:
      const id = action.payload.id;
      const index = state.cart.findIndex((el) => el.id === id);
    //   const NewProduct = action.payload.product;
    //   NewProduct.qty = 1;
      if (index === -1) {
          return {
              cart:[...state.cart,{id,qty:1}]
          }
      }
      return state;
    default:
      return state;
  }
};
