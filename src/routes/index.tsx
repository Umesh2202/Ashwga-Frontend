import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import Layout from "../pages/layout";
import Centerer from "./Centerer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Centerer />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
