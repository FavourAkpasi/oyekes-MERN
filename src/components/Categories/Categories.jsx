import React from "react";
import Button from "@mui/material/Button";
import "./Categories.css";

function Categories({ props }) {
  return (
    <div>
      <div className="category-wrapper">
        {props.slice(0, 3).map((item, index) => (
          <div className="category-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Button color="inherit" size="large" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="category-wrapper">
        {props.slice(3, 5).map((item, index) => (
          <div className="category-item2" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Button color="inherit" size="large" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
