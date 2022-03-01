import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { adjustqty } from "../redux/actions";
import { productType } from "../types";
import ProductLoader from "./product-loader";

const ProductBlock = styled.div`
  margin: 10px;
  width: 200px;
  img {
    /* width: 100%; */
    height: 200px;
    object-fit: cover;
  }
  button {
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    :active {
      box-shadow: 1px 1px 5px inset #b2b2b2;
    }
  }
`;

interface productProps {
  product: productType;
}

const Product: React.FC<productProps> = ({ product }) => {
    const dispatch = useDispatch();

    if (!product) {
        return <ProductLoader/>
    }

    const handleClick = () => {
        dispatch(adjustqty(product,1))
    }
  return (
    <ProductBlock>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <h3>{product.price}</h3>
      <button onClick={handleClick}>add to cart</button>
    </ProductBlock>
  );
};

export default Product;
