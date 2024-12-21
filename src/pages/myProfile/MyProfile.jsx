import React from 'react'

import "./myProfile.scss"
import avatar from "../../assets/logo/avatar.jpg";
import CloseIcon from '@mui/icons-material/Close';

const MyProfile = ({ user, setUser }) => {
    const [popup, setPopup] = React.useState(false)
  return (
    <div className="background__profile">
        <div className="container">
            <div className='myProfile'>
                <div className="myProfile__left">
                    <div onClick={() => setPopup(true)} className="profile">
                        <img src={user.avatar || avatar} alt="avatar" />
                        {user.name}
                    </div>
                    <div className="profile_div">
                        <div>
                            WB скидка
                            <b>до 30%</b>
                        </div>
                        <div>
                            Оплата при получении
                            <b>до 35 000 ₽</b>
                        </div>
                    </div>
                </div>
                <div className="myProfile__right"></div>
            </div>
        </div>
        {popup && <form className="background__profile-popup">
            <div>
                <CloseIcon onClick={() => setPopup(false)} className='popup_close' />
                <h2>Личные данные</h2>
                <input type="text" placeholder='Имя' />
                <button>Сохранить</button>
            </div>
        </form>}
    </div>
  )
}

export default MyProfile