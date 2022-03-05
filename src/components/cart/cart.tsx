import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { cartStateType } from "../../types";
import CartProduct from "./cart-product";

export default function Cart() {
  const cartState = useSelector<RootState>(
    (state) => state.cartReducer.cart
  ) as cartStateType[];
  
  console.log(cartState);
  return (
    <div>
      {cartState.map((el) => (
        <CartProduct id={el.id} qty={el.qty} />
      ))}
      <p>---</p>

    </div>
  );
}
