import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setSort } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { sortType } from '../../types';

const SortBlock = styled.div`
padding: 10px;
  
  button {
      margin: 0 10px;
  }
  .active {
    background-color: #b1ff67;
  }
  
`

export default function Sort() {
  let nameClass,priceClass = '';
  const stateSort = useSelector<RootState>(state=>state.filterReducer.sort) as sortType;
  if (stateSort===sortType.name) nameClass = 'active';
  if (stateSort===sortType.price) priceClass = 'active';

  const dispatch = useDispatch();

  return (
    <SortBlock>
        order by
        <button onClick={()=>dispatch(setSort(sortType.name))} className={nameClass}>name</button>
        <button onClick={()=>dispatch(setSort(sortType.price))} className={priceClass}>price</button>
    </SortBlock>
  )
}
