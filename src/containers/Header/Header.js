import './main.scss'
import './response.scss'

import Viber from '../../assets/icons/viber.png'
import Telegram from '../../assets/icons/telegram.png'
import Call from '../../assets/icons/call.png'
import Logo from '../../assets/icons/logo.png'
import Humb from '../../assets/icons/humb.png'

import Book from '../../assets/images/kitob.png'
import Hero from '../../assets/images/hero-bg.png'

import Close from '../../assets/icons/close.png'

import {
    Pop
}from '../../Page/index'

const Header = ()=>{

    function addClass (){
        document.querySelector('.modal').classList.add('active')
    }
    function removeClass (){
        document.querySelector('.modal').classList.remove('active')
    }

    
    function addPop (){
        document.querySelector('.pop').classList.add('active')
        document.querySelector('.modal').classList.remove('active')
    }

    return(
       <div className="wrap">
            <div className={`modal`}>

                <div className="modal-top">
                    <button className="close-btn"
                        onClick={removeClass}
                    >
                        <img src={Close} alt="" />
                    </button>

                    <img className="logo-images" src={Logo} alt="" />
                </div>

                <div className="modal-bottom">
                    <ul className="ul-bir">
                        <span className="ul-name">Виды строительства</span>
                        <li className="ul-items">
                            <a onClick={addPop} href="#">- Каркасные дома</a>
                        </li>
                        <li className="ul-items">
                            <a  onClick={addPop} href="#">- Дома из клеёного бруса</a>
                        </li>
                        <li className="ul-items">
                            <a onClick={addPop} href="#">- Фахверковые дома</a>
                        </li>
                        <li className="ul-items">
                            <a onClick={addPop} href="#">- Дома из брёвен</a>
                        </li>
                        <li className="ul-items">
                            <a onClick={addPop} href="#">- Беседки</a>
                        </li>
                        <li className="ul-items">
                            <a onClick={addPop} href="#">- Ремонт и отделка</a>
                        </li>
                    </ul>

                    <ul className="ikki">
                        <li className="ul-main">
                            <a href="#">Наши работы</a>
                        </li>
                        <li className="ul-main">
                            <a href="#">Отзывы клиентов</a>
                        </li>
                        <li className="ul-main">
                            <a href="#">Партнеры</a>
                        </li>
                        <li className="ul-main">
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="pop">
                <Pop></Pop>    
            </div>            


            <div className="header">
                    <button className="humb"
                        onClick={addClass}
                    >
                        <img src={Humb} alt="" />
                    </button>
                <div className="container">
                    <div className="header-inner ">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h4 className="logo-info">
                            Строительство деревянных домов <br />
                            <span className="bold">за <span className="gold">45</span> дней</span>
                        </h4>
                    </div>
                    <div className="network">
                        <h5 className="network-title">Нажмите, чтобы начать общение</h5>
                        <div className="icons">
                            <div className="icon">
                                <a href="#">
                                    <img src={Viber} alt="" />
                                    <span>Viber</span>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="#">
                                    <img src={Telegram} alt="" />
                                    <span>Telegram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="connect">
                        <div className="span">
                            <img src={Call} alt="" />
                            <span className="conect-title">+38 (098) 271-50-35</span>
                        </div>
                        <a href="tel:1234567" className="primary">ПЕРЕЗВОНИТЬ МНЕ</a>
                    </div>
                </div>
                </div>
            </div>


            <div
                 className="hero-section"
                 style={
                     {
                         backgroundImage: `url(${Hero})`
                     }
                 }
            >
                <div className="container">
                    <div className="inner-section">
                        <div className="left">
                            <h1 className="page-name">Сделаем ваш <span>Дом</span></h1>
                            <h2 className="page-title">
                                готовым к комфортному <br /> проживанию
                            </h2>
                            <p className="page-text">
                                Строительство деревянных домов «под ключ»: <br /> коттеджи, беседки, бани, дома из клееного бруса
                            </p>

                            <div className="blocks">
                                <div className="item">
                                    <span>Демонтаж</span>
                                </div>
                                <div className="item">
                                    <span>Бетонные <br /> работы</span>
                                </div>
                                <div className="item">
                                    <span>Возведение <br /> стен</span>
                                </div>
                                <div className="item">
                                    <span>Кровельные <br />
                                        работы</span>
                                </div>
                                <div className="item">
                                    <span>Отделка <br /> фасадов</span>
                                </div>
                                <div className="item">
                                    <span>Инженерные <br /> работы</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="book">
                                <h2 className="book-name">Заказать расчет</h2>
                                <p className="book-title">
                                    Оказываем  услуги комплексно, <br /> совмещая отдельные виды работ
                                </p>
                                <img src={Book} alt="" />
                                <a href="#" className="primary">Заказать расчет</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Header