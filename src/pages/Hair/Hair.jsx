import "./Hair.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Navbar3 from "../../components/Navbar3/Navbar3";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";
import { hairCategory } from "../../Data";

function Hair() {
  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
      <Categories
        categoryData={hairCategory}
        allProductsRoute="hairproducts"
        name="Hair"
      />
      <Navbar3 />
      <Socials />
      <Footer />
    </div>
  );
}

export default Hair;
