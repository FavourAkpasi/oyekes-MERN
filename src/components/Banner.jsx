import React from "react";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <div className="banner-container">
      <img src="images/hair1.jpg" alt="Banner-1" />
      <div className="banner-text">
        <h1>CLASSY HAIR, FEEL CONFIDENT</h1>
        <Button color="inherit" size="large" variant="contained">
          SHOP OYEKES HAIR
        </Button>
      </div>
    </div>
  );
}

export default Banner;
