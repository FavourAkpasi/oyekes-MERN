import React from "react";
import Button from "@mui/material/Button";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

function Categories({ categoryData, allProductsRoute, name }) {
  const navigate = useNavigate();

  const handleNavigate = (name) => {
    const item = categoryData.find((item) => item.name === name);
    const urlName = item.name.replace(/\s/g, "").toLowerCase();
    navigate(`/${urlName}`);
  };

  return (
    <div>
      <div className="category-wrapper">
        {categoryData.slice(0, 3).map((item) => (
          <div className="category-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Button
                sx={{ padding: "1rem", fontWeight: "bold", color: "#fff" }}
                color="inherit"
                size="large"
                variant="outlined"
                onClick={() => handleNavigate(item.name)}
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="category-wrapper">
        {categoryData.slice(3, 5).map((item, index) => (
          <div className="category-item2" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Button
                sx={{ padding: "1rem", fontWeight: "bold", color: "#fff" }}
                color="inherit"
                size="large"
                variant="outlined"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="not-sure">
        <h2>Not sure what you are looking for?</h2>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          onClick={() => navigate(`/${allProductsRoute}`)}
        >
          BROWSE ALL {name}
        </Button>
      </div>
    </div>
  );
}

export default Categories;
