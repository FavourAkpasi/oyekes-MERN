import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Navbar3 from "../../components/Navbar3/Navbar3";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import { description, superMegaArray } from "../../Data";

function HairProducts() {
  const hairProducts = superMegaArray.filter((item) => item.class === "hair");

  const hairDescription = description.filter(
    (item) => item.title === "OYEKES Hair"
  );

  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
      <Products
        products={hairProducts}
        description={hairDescription}
        routeName="productDetails"
      />
      <Navbar3 />
      <Socials />
      <Footer />
    </div>
  );
}

export default HairProducts;
