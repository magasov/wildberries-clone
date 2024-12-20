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

const PopupProfile = ({ user, setUser, logOutUser }) => {
  return (
    <div className="popupProfile">
      <div className="popupProfile__main">
        <div className="popupProfile__main-head">
          <img src={avatar} alt="avatar" />
          <p>
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
            <p>
              <LocalShippingIcon /> Доставки
            </p>
            <p>
              <AccountBalanceWalletIcon /> WB Кошелёк
              <span>0 ₽</span>
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
