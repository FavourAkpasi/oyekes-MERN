import "./Products.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";

function Products({ products, description, routeName }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-desc">
        <h2>{description[0].title}</h2>
        <p>{description[0].desc}</p>
      </div>
      <div className="filter-container"></div>
      <div className="products-container">
        {products.map((item) => (
          <div
            className="product-card-container"
            key={item.id}
            onClick={() => navigate(`/${routeName}/${item.id}`)}
          >
            <div className="product-card">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-item-icon">
              <FavoriteBorderRoundedIcon />
            </div>
            <div className="product-desc">
              <h5>{item.name}</h5>
              <p>{item.desc.slice(0, 50)}...</p>
              <h6>{item.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
