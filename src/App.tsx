import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/cart/cart";
import Home from "./components/home";
import ManPage from "./components/man/man-page";
import Nav from "./components/nav";
import WomanPage from "./components/woman/woman-page";

const AppBlock = styled.div`
  margin: 0 auto;
  width: 800px;
  color: #696969;
  a {
    text-decoration: none;
  }
  button {
    border: none;
    cursor: pointer;
    :active {
      box-shadow: inset 1px 1px 5px #696969;
    }
  }
`;

function App() {
  return (
    <AppBlock className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/man" element={<ManPage />} />
            <Route path="/woman" element={<WomanPage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppBlock>
  );
}

export default App;
