import React from "react";

import axios from "../../axios";
import "./popupProduct.scss";
import CloseIcon from "@mui/icons-material/Close";

const PopupProduct = ({ itemId, setPopupProduct }) => {
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProduct = async () => {
      if (!itemId) return;
      try {
        const res = await axios.get(`/products/${itemId}`);
        setItem(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [itemId]);

  if (loading) return <div>Loading...</div>;

  if (!item) return null;

  return (
    <div className="overflow">
      <div className="popupProduct">
        <div className="popupProduct__close">
          <CloseIcon onClick={() => setPopupProduct(false)} />
        </div>
        <div className="popupProduct__left">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="popupProduct__right">
          <div className="popupProduct__right-header">
            <div className="popupProduct__right-header-text">
              <p>{item.title}</p>
              <p>/</p>
              <p>{item.description}</p>
            </div>
            <div className="popupProduct__right-header-otzyv">
              <p>4,7 843 оценки Арт: 192691358</p>
            </div>
          </div>
          <div className="popupProduct__right-main">
            <div className="popupProduct__right-main-price">
              <p>{item.price} ₽</p>
              <p>{item.prices} ₽</p>
            </div>
            <span>с WB Кошельком</span>
          </div>

          <div className="popupProduct__right-color">
            <div className="popupProduct__right-color-p">
              <p>
                Цвет: <span>белый</span>
              </p>
            </div>
            <div className="popupProduct__right-color-img">
              <img src={item.img} alt={item.title} />
            </div>
          </div>

          <div className="popupProduct__right-btn">
            <button>Добавить в корзину</button>
            <button>Купить сейчас</button>
          </div>

          <div className="popupProduct__right-info">
            Больше информации о товаре
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProduct;
