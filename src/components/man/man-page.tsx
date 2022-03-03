import React from "react";
import styled from "styled-components";
import Filter from "../filter/filter";
import ManList from "./man-list";
import Sort from "../filter/sort";

const ManPageBlock = styled.div`
  display: flex;
  .filter {
      flex: 1 1 30%;
  }
  .content {
    flex: 1 1 70%;
  }
`;

export default function ManPage() {
//   getManProducts().then((products) => console.log(products));
  return (
    <ManPageBlock>
      <div className="filter">
        <Filter />
      </div>
      <div className="content">
        <Sort />
        <ManList />
      </div>
    </ManPageBlock>
  );
}
