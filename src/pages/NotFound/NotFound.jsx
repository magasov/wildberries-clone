import "./notfound.scss";
import imgNotFound from "../../assets/banner/notFound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFound">
        <div className="notFound__main">
          <div>
            <h3>По Вашему запросу ничего не найдено</h3>
            <Link to="/">
              <button>На главную</button>
            </Link>
          </div>
          <img src={imgNotFound} alt="notfound" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
