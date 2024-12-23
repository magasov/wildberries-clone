import React from "react";
import "./admin.scss";
import axios from "../../axios";
import noavatar from "../../assets/logo/avatar.jpg";
import moment from "moment";
import "moment/locale/ru";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";

const AllUser = () => {
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

  return (
    <div className="container">
      <div className="admin">
        <div className="admin__head">
          <div className="admin__head-left">
            <h1>Пользователи</h1>
            <p>
              Создавайте пользователей, их настройки и информацию и управляйте
              ими.
            </p>
          </div>
          <div className="admin__head-right">
            <Link to="/admin/users">Пользователи</Link>
            <Link to="/admin">Обзор</Link>
          </div>
        </div>
        <div className="adminUser">
          <div className="adminUser__navbar">
            <p>Все</p>
            <p>Заблокированные</p>
          </div>
          <div className="adminUser__search">
            <img src={searchIcon} alt="searchIcon" />
            <input type="text" placeholder="Поиск" />
          </div>
          <div className="adminUser__card">
            <div className="adminUser__card-header">
              <div className="div__admin-right">
                <p>Пользователи</p>
              </div>
              <div className="div__admin-left">
                <p>Последний вход в систему</p>
                <p>Присоединился</p>
              </div>
            </div>
            <div className="adminUser__card-users">
              {users.map((user) => (
                <div className="adminUsers">
                  <div className="userDataInfo">
                    <div className="userDataAvatar">
                      <img src={user.avatar || noavatar} alt="avatar" />
                    </div>
                    <p>
                      {user.name} <br /> <span>{user.email}</span>
                    </p>
                  </div>
                  <div className="userAllRight">
                    <div className="adminUser__logTime">8 Декабрь, 2024</div>
                    <div className="adminUser__log">2 Ноябрь, 2024</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
