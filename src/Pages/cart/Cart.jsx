import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart" style={{ margin: "10px" }}>
      <div className="cart-title">
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart-list d-flex gap-5">
        <div className="cart-list d-flex flex-wrap gap-2">
          {cartItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return (
              <CartItem data={product} qty={item.count} key={product.id} />
            );
          })}
        </div>

        <div className="cart-info d-flex flex-column gap-2">
          Subtotal: ${totalAmount}
          <button className="btn btn-primary">Checkout</button>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
