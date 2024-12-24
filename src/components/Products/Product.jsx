import React from "react";

import "./product.scss";
import scidka from "../../assets/icons/scidka.png";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "../../axios.js";
import Loader from "../Loader/Loader.jsx";
import PopupProduct from "../PopupProduct/PopupProduct.jsx";

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [itemId, setItemId] = React.useState(0);
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        const res = await axios.get("/products");
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [popupProduct, setPopupProduct] = React.useState(false);
  console.log(itemId);

  const onClickPopupProd = (obj) => {
    setItemId(obj.id);
    setPopupProduct(true);
  };

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="products">
        {products.map((obj) => (
          <div className="product" key={obj.id}>
            <div className="product__img">
              <img src={obj.img} alt="product" />
              <div className="image__opacity">
                <p onClick={() => onClickPopupProd(obj)}>Быстрый просмотр</p>
              </div>
            </div>
            <div className="product__price">
              <h3>
                <img src={scidka} alt="scidka" />
                {obj.price} ₽
              </h3>
              <h3>{obj.prices} ₽</h3>
            </div>
            <div className="product__desc">
              <p>{obj.title}</p>/<p>{obj.description}</p>
            </div>
            <div className="product__rating">
              <p>
                <StarIcon />
                4,6
              </p>
              <p>·</p>
              <p>3 332 оценки</p>
            </div>
            <button>
              <ShoppingCartIcon />
              Завтра
            </button>
          </div>
        ))}
      </div>
      {popupProduct && (
        <PopupProduct itemId={itemId} setPopupProduct={setPopupProduct} />
      )}
    </div>
  );
};

export default Product;
