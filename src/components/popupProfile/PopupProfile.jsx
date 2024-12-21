import React from "react";

import "./popupProfile.scss";
import avatar from "../../assets/logo/avatar.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SellIcon from "@mui/icons-material/Sell";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShopIcon from "@mui/icons-material/Shop";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useNavigate } from "react-router-dom";

const PopupProfile = ({ user, setUser, logOutUser }) => {
  const navigate = useNavigate();
  const linkProdavec = () => {
    navigate("/addproduct");
    window.location.reload();
  };
  const linkMe = () => {
    navigate("/myprofile");
    window.location.reload();
  };

  return (
    <div className="popupProfile">
      <div className="popupProfile__main">
        <div className="popupProfile__main-head">
          <img src={user.avatar || avatar} alt="avatar" />
          <p onClick={() => linkMe()}>
            {user.name} <ChevronRightIcon />
          </p>
        </div>
        <div className="popupProfile__main-main">
          <div className="main_profile">
            <p>
              <ShopIcon />
              Покупки
            </p>
            <p>
              <FavoriteIcon /> Избранное
            </p>
            <p>
              <SellIcon /> Любимые бренды
            </p>
            <p onClick={() => linkProdavec()}>
              <EmojiEmotionsIcon /> Быть продавцом
            </p>
            <p>
              <LocalShippingIcon /> Доставки
            </p>
            <p>
              <AccountBalanceWalletIcon /> WB Кошелёк
              <span>{user.balance || 0} ₽</span>
            </p>
            <p>
              <CreditCardIcon /> Способы оплаты
            </p>
          </div>
          <hr />
          <div className="exit">
            <p onClick={() => logOutUser()}>Выйти</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProfile;
