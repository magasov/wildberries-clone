import React from 'react'

import "./myProfile.scss"
import avatar from "../../assets/logo/avatar.jpg";
import CloseIcon from '@mui/icons-material/Close';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorIcon from '@mui/icons-material/Monitor';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GradeIcon from '@mui/icons-material/Grade';

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
                    <div className='profile_finance'>
                        <p>Финансы</p>
                        <div><CreditCardIcon /> Способы оплаты</div>
                        <div><AssignmentIcon /> Реквизиты</div>
                    </div>
                    <div className='profile_finance'>
                        <p>Управление</p>
                        <div><SettingsIcon /> Настройки</div>
                        <div><MonitorIcon /> Ваши устройства</div>
                    </div>
                </div>
                <div className="myProfile__right">
                    <div className="myProfile__right-one">
                        <div className='myProfile__right-one-div'>
                            <div>
                                <p><CreditScoreIcon /> 0 ₽</p>
                                <span>WB Кошелёк</span>
                            </div>
                            <button>Пополнить</button>
                        </div>
                        <div className='myProfile__right-one-div'>
                            <div>
                                <p>Рассрочка</p>
                                <span>До 50 000 ₽</span>
                            </div>
                            <span>
                                <ChevronRightIcon />
                            </span>
                        </div>
                    </div>
                    <div className="myProfile__right-two">
                        <div className='myProfile__right-two-img'>
                            <h3>Выиграйте <br /> миллион <span>на покупки WB</span></h3>
                        </div>
                        <div className='myProfile__right-two-div'></div>
                    </div>
                    <div className="myProfile__right-one">
                        <div className='myProfile__right-one-div'>
                            <div>
                                <p>Избранное</p>
                                <span>2 товара</span>
                            </div>
                            <span className='lk_icons'><FavoriteIcon /></span>
                        </div>
                        <div className='myProfile__right-one-div'>
                            <div>
                                <p>Покупки</p>
                                <span>Смотреть</span>
                            </div>
                            <span className='lk_icons'>
                                <ShoppingBagIcon />
                            </span>
                        </div>
                            <div className='myProfile__right-one-div'>
                                <div>
                                    <p>Ждут оценки</p>
                                    <span>4 товара</span>
                                </div>
                                <span className='lk_icons'>
                                    <GradeIcon />
                                </span>
                            </div>
                    </div>
                </div>
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