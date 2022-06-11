import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Fabrics from "./pages/Fabrics/Fabrics";
import Hair from "./pages/Hair/Hair";
import Home from "./pages/Home/Home";
import HairProducts from "./pages/HairProducts/HairProducts";
import FabricsProducts from "./pages/FabricsProducts/FabricsProducts";
import ProductDetails from "./pages/productDetails/ProductDetails";
import "./style.css";
import BoneStraight from "./pages/BoneStraight/BoneStraight";
import ShoulderLength from "./pages/ShoulderLength/ShoulderLength";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hair" element={<Hair />} />
        <Route path="fabrics" element={<Fabrics />} />
        <Route path="hairproducts" element={<HairProducts />} />
        <Route path="fabricproducts" element={<FabricsProducts />} />
        <Route path="bonestraight" element={<BoneStraight />} />
        <Route path="shoulderlength" element={<ShoulderLength />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="Login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
