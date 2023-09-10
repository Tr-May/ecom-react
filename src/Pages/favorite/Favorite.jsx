import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FavoriteItem } from "./FavoriteItem";

export const Favorite = () => {
  const { favoriteIds } = useContext(CartContext);
  return (
    <div className="container">
      <div className="products-title">
        <h3>Favorite Items</h3>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {favoriteIds.map((fid) => {
          const product = PRODUCTS.find((product) => product.id === fid);
          return <FavoriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};
