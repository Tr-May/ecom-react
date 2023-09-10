import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Navbar = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (pathname === "/" && "active text-danger fw-bold")
                }
                aria-current="page"
                to="/"
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (pathname === "/cart" && "active text-danger fw-bold")
                }
                to="/cart"
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-secondary">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (pathname === "/favorite" && "active text-danger fw-bold")
                }
                to="/favorite"
              >
                Favorite
                {favoriteIds.length > 0 && (
                  <span className="badge bg-secondary">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
