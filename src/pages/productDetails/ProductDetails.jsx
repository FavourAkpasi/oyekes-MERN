import React from "react";
import "./ProductDetails.css";
// import { useParams } from "react-router-dom";
// import { superMegaArray } from "../../Data";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const FilterContainer = styled.div`
  margin: 1.5rem 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 0.5rem;
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option`
  padding: 0.5rem;
`;

function ProductDetails() {
  // const params = useParams();

  // const productId = params.productId;

  // const product = superMegaArray.find((item) => item.id === productId);

  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />

      <div className="product-details-container">
        <div className="product-details-image">
          <img src="images/h1.jpg" alt="h1" />
        </div>
        <div className="product-details-desc">
          <h2>Straight Hair</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium reiciendis ex ratione? Eligendi illum iste nihil sequi
            laudantium. Consequatur reiciendis cum ipsum ipsam adipisci
            praesentium exercitationem. Natus tenetur explicabo ea.
          </p>
          <h3>₦ 2,100</h3>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Single</FilterSizeOption>
                <FilterSizeOption>Double</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <div className="product-quantity">
            <Button color="inherit" size="small" variant="outlined">
              <Add />
            </Button>
            <span>2</span>
            <Button color="inherit" size="small" variant="outlined">
              <Remove />
            </Button>
          </div>
          <Button color="success" size="large" variant="contained">
            ADD TO CART
          </Button>
        </div>
      </div>

      <Socials />
      <Footer />
    </div>
  );
}

export default ProductDetails;
