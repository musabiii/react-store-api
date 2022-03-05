import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { filterType, productType, sortType } from "../../types";
import { filterIt, sortIt } from "../../utils/filter";
import { getManProducts, getWomanProducts } from "../../utils/service";
import Product from "../product/product";
import ProductLoader from "../product/product-loader";

const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function WomanList() {
  const [list, setList] = useState<productType[]>([]);

  const stateFilter = useSelector<RootState>(state=>state.filterReducer.filter) as filterType;
  const stateSort = useSelector<RootState>(state=>state.filterReducer.sort) as sortType;
  
  let {from,till} = stateFilter;
  till = (till===0)?99999:till;

  const filteredList = filterIt(list,from,till);
  sortIt(filteredList,stateSort);

  useEffect(() => {
    getWomanProducts().then((products) => setList(products));
  }, []);

  if (!list.length) {
    return <ListBlock>{Array(4).fill(<ProductLoader />)}</ListBlock>;
  }

  return (
    <ListBlock>
      {filteredList.map((el) => (
        <Product product={el} />
      ))}
    </ListBlock>
  );
}
