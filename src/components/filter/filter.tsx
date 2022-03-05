import React, { ChangeEvent, ReactEventHandler, SyntheticEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilterFrom, setFilterTill } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { actions, filterType } from "../../types";

const FilterBlock = styled.div`
  background-color: #C1DEAE;
  text-align: center;
  padding: 10px;
  height: 100%;
`;

export default function Filter() {
  const dispatch = useDispatch();

  const stateFilter = useSelector<RootState>(state=>state.filterReducer.filter) as filterType;
  console.log(stateFilter);

  useEffect(()=>{

  },[])

  const handleChagleFrom = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(setFilterFrom(+value));
  };

  const handleChagleTill = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(setFilterTill(+value));
  };

  const handleReset = () => {
    dispatch(setFilterFrom(0));
    dispatch(setFilterTill(0));
  }

  return (
    <FilterBlock>
      <p>FILTER</p>
      <p>price</p>
      <input value={stateFilter.from} onChange={handleChagleFrom} type="number" placeholder="from" />
      <input value={stateFilter.till} onChange={handleChagleTill} type="number" placeholder="till" />
      <p></p>
      <button onClick={handleReset}>reset</button>
    </FilterBlock>
  );
}
