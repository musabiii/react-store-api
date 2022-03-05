import React from "react";
import styled from "styled-components";
import Filter from "../filter/filter";
import WomanList from "./woman-list";
import Sort from "../filter/sort";
import { List } from "../hoc/list";
import { getWomanProducts } from "../../utils/service";

const ManPageBlock = styled.div`
  display: flex;
  .filter {
      flex: 1 1 30%;
  }
  .content {
    flex: 1 1 70%;
  }
`;

export default function WomanPage() {
//   getManProducts().then((products) => console.log(products));
  return (
    <ManPageBlock>
      <div className="filter">
        <Filter />
      </div>
      <div className="content">
        <Sort />
        <List getProducts={getWomanProducts} />
      </div>
    </ManPageBlock>
  );
}
