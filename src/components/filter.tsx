import React from "react";
import styled from "styled-components";

const FilterBlock = styled.div`
  background-color: aquamarine;
  text-align: center;
  padding: 10px;
  height: 100%;
`;

export default function Filter() {
  return (
    <FilterBlock>
        <p>FILTER</p>
        <p>price</p>
      <input type="number" placeholder="from"/>
      <input type="number" placeholder="till"/>
      <p></p>
      <button>reset</button>
    </FilterBlock>
  );
}
