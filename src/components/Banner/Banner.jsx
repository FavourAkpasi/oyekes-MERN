import React from "react";
import Button from "@mui/material/Button";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="banner-container">
      <img src="images/hair1.jpg" alt="Banner-1" />
      <div className="banner-text">
        <h1>CLASSY HAIR, FEEL CONFIDENT</h1>
        <Button
          sx={{ padding: "1rem", fontWeight: "bold", color: "#000" }}
          color="inherit"
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/hair");
          }}
        >
          SHOP OYEKES HAIR
        </Button>
      </div>
    </div>
  );
}

export default Banner;
