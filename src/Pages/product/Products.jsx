import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

export const Products = () => {
  return (
    <div className="products" style={{ margin: "10px" }}>
      <div className="products-title">
        <h1>Products</h1>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
