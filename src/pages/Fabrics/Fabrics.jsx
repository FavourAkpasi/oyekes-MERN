import "./Fabrics.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Navbar3 from "../../components/Navbar3/Navbar3";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";
import { fabricsCategory } from "../../Data";

function Fabrics() {
  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
      <Categories
        categoryData={fabricsCategory}
        allProductsRoute="fabricproducts"
        name="Fabrics"
      />
      <Navbar3 />
      <Socials />
      <Footer />
    </div>
  );
}

export default Fabrics;
