import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const SomeComponent = () => {
  const { productId } = useParams();

  return <ProductDetail productId={productId} />;
};

export default SomeComponent;
