import React from "react";
import "./admin.scss";
import axios from "../../axios";
import noavatar from "../../assets/logo/avatar.jpg";
import moment from "moment";
import "moment/locale/ru";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const formatDate = (date) => {
    if (!date) return "Не найдено";
    return moment(date).locale("ru").format("D MMMM YYYY, HH:mm");
  };

  // сортировка по дате чтобы массив был сверху вниз
  const sortedDataLoign = [...users]
    .filter((user) => {
      if (user.lastLoginDate) {
        const lastLogin = new Date(user.lastLoginDate);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        return lastLogin >= sevenDaysAgo;
      }

      return false;
    })
    .sort((a, b) => new Date(b.lastLoginDate) - new Date(a.lastLoginDate));

  // сортировка по дате чтобы массив был сверху вниз
  const sortedDataRegister = [...users]
    .filter((user) => {
      if (user.registrationDate) {
        const lastLogin = new Date(user.registrationDate);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        return lastLogin >= sevenDaysAgo;
      }

      return false;
    })
    .sort(
      (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
    );

  return (
    <div className="container">
      <div className="admin">
        <div className="admin__head">
          <div className="admin__head-left">
            <h1>
              Admin <span>dashboard</span>
            </h1>
            <p>Поздравляем, у вашего приложения появились пользователи!</p>
          </div>
          <div className="admin__head-right">
            <Link to="/admin/user">Пользователи</Link>
            <Link to="/">Добавить</Link>
          </div>
        </div>
        <div className="admin__main">
          <div className="admin__main-header">
            <ul>
              <li>
                Общее количество пользователей
                <br />
                <span>За все время</span>
              </li>
              <span className="childrenAdminPanel">{users.length}</span>
            </ul>
            <ul>
              <li>
                Активные пользователи
                <br />
                <span>За все время</span>
              </li>
              <span className="childrenAdminPanel">{users.length}</span>
            </ul>
            <ul>
              <li>
                Регистрация
                <br />
                <span>Декабрь 2024 года</span>
              </li>
              <span className="childrenAdminPanel">2</span>
            </ul>
            <ul>
              <li>
                Входы в систему
                <br />
                <span>Декабрь 2024 года</span>
              </li>
              <span className="childrenAdminPanel">2</span>
            </ul>
          </div>
          <div className="admin__main-section">
            <div className="admin__main-section-div">
              <h3>Недавние регистрации</h3>
              <div className="gap__admin-panel">
                {sortedDataRegister.map((user) => (
                  <div key={user.id} className="admin_profile-all">
                    <div className="userDataInfo">
                      <div className="userDataAvatar">
                        <img src={user.avatar || noavatar} alt="avatar" />
                      </div>
                      <p>
                        {user.name} <br /> <span>{user.email}</span>
                      </p>
                    </div>
                    <div className="userDataTime">
                      {formatDate(user.registrationDate)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="admin__main-section-div">
              <h3>Недавние входы</h3>
              <div className="gap__admin-panel">
                {sortedDataLoign.map((user) => (
                  <div key={user.id} className="admin_profile-all">
                    <div className="userDataInfo">
                      <div className="userDataAvatar">
                        <img src={user.avatar || noavatar} alt="avatar" />
                      </div>
                      <p>
                        {user.name} <br /> <span>{user.email}</span>
                      </p>
                    </div>
                    <div className="userDataTime">
                      {formatDate(user.lastLoginDate)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
