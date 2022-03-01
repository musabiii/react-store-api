import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/cart";
import Home from "./components/home";
import ManPage from "./components/man-page";
import Nav from "./components/nav";
import WomanPage from "./components/woman-page";


const AppBlock = styled.div`
  margin: 0 auto;
  width: 800px;
  a {
    text-decoration: none;
  }
`

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
