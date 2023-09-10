import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Products } from "./pages/product/Products";
import { ProductDetail } from "./pages/product/ProductDetail";
import { Cart } from "./pages/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { Favorite } from "./Pages/favorite/Favorite";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
