import React from "react";

import "./auth.scss";
import CheckIcon from "@mui/icons-material/Check";

const Auth = () => {
  const [register, setRegister] = React.useState(false);
  return (
    <div className="auth">
      <form className="auth__container">
        <h2>{register === false ? "Войти" : "Регистрация"}</h2>
        <input type="email" placeholder="email" />
        {register && <input type="email" placeholder="email" />}
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
