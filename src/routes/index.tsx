import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddProduct, Home, Login, ProductDetails } from "@/pages";
import Layout from "../pages/layout";
import Centerer from "./Centerer";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Centerer />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
