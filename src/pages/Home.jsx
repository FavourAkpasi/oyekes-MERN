import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Banner from "../components/Banner";
import Navbar3 from "../components/Navbar3";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

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
