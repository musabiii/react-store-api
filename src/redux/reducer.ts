import { actions, actionType, stateType,cartProductType } from "../types";

const initialState: stateType = {
  cart: [],
};

export const reducer = (
  state: stateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case actions.ADJUST_QTY:
      const id = action.payload.id;
      const index = state.cart.findIndex((el) => el.id === id);
      const NewProduct = action.payload.product;
      NewProduct.qty = 1;
      if (index === -1) {
          return {
              cart:[...state.cart,NewProduct]
          }
      }
      return state;
    default:
      return state;
  }
};
