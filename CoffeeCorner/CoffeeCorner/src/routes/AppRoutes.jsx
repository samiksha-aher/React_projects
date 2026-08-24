import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/menu"
        element={<Menu />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/order-success/:orderId"
        element={<OrderSuccess />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/order/:orderId"
        element={<OrderDetails />}
      />

    </Routes>
  );
}

export default AppRoutes;