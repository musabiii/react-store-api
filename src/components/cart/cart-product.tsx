import { useEffect, useState } from "react";
import styled from "styled-components";
import { productType } from "../../types";
import { getProduct } from "../../utils/service";
import CartLoading from "./cart-loading";

interface cartProductProps {
  id: number;
  qty: number;
}

const CartProduct: React.FC<cartProductProps> = ({ id, qty }) => {
  console.log(id);
  const [product, setProduct] = useState<productType>();

  useEffect(() => {
    getProduct(id).then((el) => setProduct(el));
  }, [id]);

  const CartProductBlock = styled.div`
    display: flex;
    border: 1px solid #696969;
    margin: 10px;
    justify-content: space-around;
  `;

  if (!product) {
    return (
      <CartProductBlock>
        <CartLoading />
      </CartProductBlock>
    );
  }
  return (
    <CartProductBlock>
      {product.title}
      <div>{product.price} $</div>
      <div>{qty}</div>
      <button>+</button>
      <button>-</button>
      <button>del</button>

    </CartProductBlock>
  );
};

export default CartProduct;
