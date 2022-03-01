import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { productType } from "../types";
import { getManProducts } from "../utils/service";
import Product from "./product";
import ProductLoader from "./product-loader";

const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function ManList() {
  const [list, setList] = useState<productType[]>([]);

  useEffect(() => {
    getManProducts().then((products) => setList(products));
  }, []);

  if (!list.length) {
    return <ListBlock>{Array(4).fill(<ProductLoader />)}</ListBlock>;
  }

  return (
    <ListBlock>
      {list.map((el) => (
        <Product product={el} />
      ))}
    </ListBlock>
  );
}
