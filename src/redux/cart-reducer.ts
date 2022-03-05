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
      const before = state.cart.slice(0,index);
      const after = state.cart.slice(index+1);

      if (state.cart[index].qty + action.payload.qty === 0) {
        return {cart:[...before,...after]}
      }

      const newItem = {
        id:id,
        qty:state.cart[index].qty+action.payload.qty
      }


      return {
        cart:[...before,newItem,...after]
      }

      
    default:
      return state;
  }
};
