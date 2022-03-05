import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { adjustqty } from "../../redux/actions";
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
  const dispatch = useDispatch();


  useEffect(() => {
    getProduct(id).then((el) => setProduct(el));
  }, [id]);

  const CartProductBlock = styled.div`
    display: flex;
    border: 1px solid #696969;
    margin: 10px;
    justify-content: space-around;
    .product-title {
      width: 400px;
    }
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
      <div className="product-title">
      {product.title}
      </div>
      <div>{product.price} $</div>
      <div>{qty}</div>
      <div className="qty">
      <button onClick={()=> dispatch(adjustqty(product.id,1))}>+</button>
      <button onClick={()=> dispatch(adjustqty(product.id,-1))}>-</button>
      </div>
      <button onClick={()=> dispatch(adjustqty(product.id,-qty))}>del</button>
      <div className="product-total">
        {Math.floor(product.price*qty)}$
      </div>

    </CartProductBlock>
  );
};

export default CartProduct;
