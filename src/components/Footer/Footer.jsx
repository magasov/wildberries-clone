import React from "react";

import "./footer.scss";
import QrCode from "../../assets/icons/qr.svg";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__bottom">
            <nav className="footer__bottom-nav">
              <div className="nav__div">
                <p>Покупателям</p>
                <Link to="/">Вопросы и ответы</Link>
                <Link to="/">Юридическая информация</Link>
              </div>
              <div className="nav__div">
                <p>Продавцам и партнёрам</p>
                <Link to="/">Продавать товары</Link>
                <Link to="/">Открыть пункт выдачи</Link>
                <Link to="/">Предложить помещение</Link>
                <Link to="/">Развозить грузы</Link>
                <Link to="/">Доставлять заказы</Link>
              </div>
              <div className="nav__div">
                <p>Наши проекты</p>
                <Link to="/">WB Guru</Link>
                <Link to="/">WB Stream</Link>
              </div>
              <div className="nav__div">
                <p>Компания</p>
                <Link to="/">О нас</Link>
                <Link to="/">Пресс-служба</Link>
                <Link to="/">Контакты</Link>
                <Link to="/">Вакансии</Link>
                <Link to="/">Сообщить о мошенничестве</Link>
              </div>
            </nav>
            <nav className="footer__bottom-qr">
              <img src={QrCode} alt="" />
            </nav>
          </div>
          <div className="footer__top">
            <p>
              © Wildberies 2004–2024. Все права защищены. <br />
              Применяются <span>рекомендательные технологии</span>
            </p>
            <ul>
              <Link to="/">
                <YouTubeIcon />
              </Link>
              <Link to="/">
                <FacebookIcon />
              </Link>
              <Link to="/">
                <InstagramIcon />
              </Link>
              <Link to="/">
                <LinkedInIcon />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
