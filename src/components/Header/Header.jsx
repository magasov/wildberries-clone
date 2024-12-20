import React, { useEffect, useState } from "react";
import "./header.scss";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PopupProfile from "../popupProfile/PopupProfile";

const Header = ({ user, setUser }) => {
  const [currentCity, setCurrentCity] = useState("Загрузка...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [popupPerson, setPopupPerson] = React.useState(false);

  const handleMouseOver = () => {
    setPopupPerson(true);
  };

  const handleMouseOut = () => {
    setPopupPerson(false);
  };

  const [cities, setCities] = useState([
    "Москва",
    "Санкт-Петербург",
    "Казань",
    "Новосибирск",
    "Екатеринбург",
  ]);

  // Функция для получения города по IP
  useEffect(() => {
    const fetchCityByIP = async () => {
      const savedCity = localStorage.getItem("selectedCity");
      if (savedCity) {
        setCurrentCity(savedCity);
        return;
      }

      try {
        const response = await fetch(
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address",
          {
            method: "GET",
            headers: {
              Authorization: "Token 8423e98ac51c86fc93f6a98108f2ec571d7a6638",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setCurrentCity(data?.location?.data?.city || "Неизвестно");
      } catch (error) {
        console.error("Ошибка при определении города:", error);
        setCurrentCity("Не удалось определить");
      }
    };

    fetchCityByIP();
  }, []);

  const handleCityChange = (city) => {
    setCurrentCity(city);
    localStorage.setItem("selectedCity", city);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".city-dropdown") &&
        !event.target.closest(".header__head_p")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header__main">
          <div className="header__head">
            <div className="header__head_one">
              <p
                className="header__head_p"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <PlaceIcon className="map" />
                {currentCity}
              </p>
              {isDropdownOpen && (
                <ul className="city-dropdown">
                  {cities.map((city) => (
                    <li
                      key={city}
                      onClick={() => handleCityChange(city)}
                      className="city-dropdown-item"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
              <div className="header__head_div">
                <Link to="/">Продавайте на Wildberies</Link>
                <Link to="/">Работа в Wildberies</Link>
              </div>
              <div className="header__head_priceLanguage">RUB</div>
            </div>
          </div>
          <div className="header">
            <Link to="/" className="header__logo">
              <img src={logo} alt="logo" />
            </Link>
            <div className="header__menu">
              <MenuIcon />
            </div>
            <div className="header__search">
              <input type="text" placeholder="Найти на Wildberies" />
              <span className="header__search-photo">
                <PhotoCameraIcon />
              </span>
            </div>
            <div className="header__navbars">
              {user.email ? (
                <>
                  <Link to="/">
                    <span>
                      <LocalShippingIcon />
                    </span>
                    Доставки
                  </Link>
                  <Link to="/">
                    <span>
                      <FavoriteIcon />
                    </span>
                    Избранное
                  </Link>
                  <Link
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    to="/"
                  >
                    <span>
                      <PersonIcon />
                    </span>
                    Профиль
                  </Link>
                  <Link to="/">
                    <span>
                      <LocalGroceryStoreIcon />
                    </span>
                    Корзина
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <span>
                      <PlaceIcon />
                    </span>
                    Адреса
                  </Link>
                  <Link to="/">
                    <span>
                      <PersonIcon />
                    </span>
                    Войти
                  </Link>
                  <Link to="/">
                    <span>
                      <LocalGroceryStoreIcon />
                    </span>
                    Корзина
                  </Link>
                </>
              )}

              {/* Всплывающее окно профиля */}
              {popupPerson && (
                <div
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                  className="popup-profile-wrapper"
                >
                  <PopupProfile user={user} setUser={setUser} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
