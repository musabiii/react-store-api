import styled from "styled-components";


const ProductLoaderBlock = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  background-color: #eee;
  text-align: center;
  line-height: 300px;
`;

const ProductLoader = () => {
  return <ProductLoaderBlock>loading...</ProductLoaderBlock>;
};

export default ProductLoader;
