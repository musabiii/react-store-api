import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
const NavBlock = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: antiquewhite;
  .active {
    background-color: #c8c8f1;
  }
  a {
    padding: 10px;
    background-color: aliceblue;
  }
`;
export default function Nav() {
  return (
    <>
      <NavBlock>
        <NavLink to="/">home</NavLink>
        <NavLink to="/man">man</NavLink>
        <NavLink to="/woman">woman</NavLink>
        <NavLink to="/cart">cart</NavLink>
      </NavBlock>
      <Outlet />
    </>
  );
}
