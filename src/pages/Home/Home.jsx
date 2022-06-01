import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Banner from "../../components/Banner/Banner";
import Navbar3 from "../../components/Navbar3/Navbar3";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
      <Banner />
      <Navbar3 />
      <Socials />
      <Footer />
    </div>
  );
}

export default Home;
