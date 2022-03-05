import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { cartProductType } from "../types";
const NavBlock = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #B4CFB0;
  .active {
    background-color: #789395;
  }
  a {
    padding: 10px;
    background-color: #94B49F;
  }
`;
export default function Nav() {

  const stateCart = useSelector<RootState>(
    (state) => state.cartReducer.cart
  ) as cartProductType[];
  console.log(stateCart);

  let amount = 0;
  for (let i = 0;i<stateCart.length;i++) {
    amount +=stateCart[i].qty;
  }

  useEffect(() => {
  });

  return (
    <>
      <NavBlock>
        <NavLink to="/">home</NavLink>
        <NavLink to="/man">man</NavLink>
        <NavLink to="/woman">woman</NavLink>
        <NavLink to="/cart">cart({amount})</NavLink>
      </NavBlock>
      <Outlet />
    </>
  );
}
