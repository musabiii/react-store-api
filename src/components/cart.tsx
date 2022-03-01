import React from "react";
import { useSelector } from "react-redux";
import { stateType } from "../types";

export default function Cart() {
  const stateCart = useSelector<stateType>((state) => state.cart);
  console.log(stateCart);
  return <div>Cart</div>;
}
