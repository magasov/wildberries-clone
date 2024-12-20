import React from "react";

import "./auth.scss";
import CheckIcon from "@mui/icons-material/Check";
import axios from "../../axios.js";
import { useNavigate } from "react-router-dom";

const Auth = ({ user, setUser }) => {
  const [register, setRegister] = React.useState(false);
  const navigate = useNavigate();

  const signInHandler = async (e) => {
    try {
      const res = await axios.post("/login", {
        email: e.target[0].value,
        password: e.target[1].value,
      });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
      e.target.reset();
    } catch (err) {
      alert(err.response?.data?.message || "Ошибка входа");
    }
  };

  const signUpHandler = (e) => {
    axios
      .post("/signup", {
        email: e.target[0].value,
        name: e.target[1].value,
        password: e.target[2].value,
        balance: 1000,
        avatar: "",
        products: [],
      })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="auth">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (register === false) {
            signInHandler(e);
          } else {
            signUpHandler(e);
          }
        }}
        className="auth__container"
      >
        <h2>{register === false ? "Войти" : "Регистрация"}</h2>
        <input type="email" placeholder="email" />
        {register && <input type="name" placeholder="name" />}
        <input type="password" placeholder="password" />
        <button>{register === false ? "Вход" : "Создать"}</button>
        <div>
          <p>
            <CheckIcon /> <span>Соглашаюсь</span> с правилами пользования
            торговой площадкой <span>и</span> возврата
          </p>
          <div className="isRegister" onClick={() => setRegister(!register)}>
            {register === false ? "Нет аккаунта ?" : "Уже есть аккаунт ?"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
