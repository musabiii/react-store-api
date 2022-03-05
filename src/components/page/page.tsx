import React from "react";
import styled from "styled-components";
import Filter from "../filter/filter";
import Sort from "../filter/sort";
import { productType } from "../../types";
import { List } from "./list";

const ManPageBlock = styled.div`
  display: flex;
  .filter {
      flex: 1 1 30%;
  }
  .content {
    flex: 1 1 70%;
  }
`;


interface pageProps {
    getProducts:()=>Promise<productType[]>
}

export  const Page:React.FC<pageProps>=({getProducts})=> {
//   getManProducts().then((products) => console.log(products));
  return (
    <ManPageBlock>
      <div className="filter">
        <Filter />
      </div>
      <div className="content">
        <Sort />
        <List getProducts={getProducts} />
      </div>
    </ManPageBlock>
  );
}
