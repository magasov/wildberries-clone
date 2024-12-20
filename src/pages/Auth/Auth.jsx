import "./auth.scss";

import CheckIcon from "@mui/icons-material/Check";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__container">
        <h2>Войти или создать профиль</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Войти</button>
        <p>
          <CheckIcon /> <span>Соглашаюсь</span> с правилами пользования торговой
          площадкой <span>и</span> возврата
        </p>
      </div>
    </div>
  );
};

export default Auth;
