import React from "react";
import { useParams } from "react-router-dom";
import { superMegaArray } from "../../Data";

function ProductDetails() {
  const params = useParams();
  const productId = Number(params.productId);

  const product = superMegaArray.find((product) => product.id === productId);
  console.log();

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}

export default ProductDetails;
