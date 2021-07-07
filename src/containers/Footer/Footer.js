import './main.scss'
import './response.scss'

import Logo from '../../assets/icons/logo.png'
import Face from '../../assets/icons/face.png'
import Insta from '../../assets/icons/instagramm.png'
import Tg from '../../assets/icons/telegram.png'
import Top from '../../assets/icons/top.png'


const Footer = ()=>{
    return (
        <div className="footer-inner">

            <a href="#" className="back-to-top">
                <img src={Top} alt="" />
            </a>
            <div className="container">

            <ul className="ul-one">
                <li>
                    <img src={Logo} alt="" />
                </li>
            </ul>

            <div className="ul-one-block">
                    <ul className="child-one">
                        <span>Виды строительства</span>
                        <li>
                            <a href="#">- Каркасные дома</a>
                        </li>
                        <li>
                            <a href="#">- Дома из клеёного бруса</a>
                        </li>
                        <li>
                            <a href="#">- Фахверковые дома</a>
                        </li>
                        <li>
                            <a href="#">- Дома из брёвен</a>
                        </li>
                        <li>
                            <a href="#">- Беседки</a>
                        </li>
                        <li>
                            <a href="#">- Ремонт и отделка</a>
                        </li>
                    </ul>

                    <ul className="child-two">
                        <li>
                            <a className="al" href="#">Наши работы</a>
                        </li>

                        <li>
                            <a className="al" href="#">Отзывы клиентов</a>
                        </li>

                        <li>
                            <a className="al" href="#">Партнеры</a>
                        </li>

                    </ul>
            </div>

            <ul className="ul-two">
                <span>Контакты</span>
                <li className="has-bef map">
                    <a href="#">
                        Украина, г.Одесса <br />
                        ул.Комитетская, 24Б
                    </a>
                </li>
                    <li className="has-bef ema">
                    <a href="mailto: uhduheuhe">
                        Эл.почта: odessadomd@gmail.com
                    </a>
                </li>
                    <li className="has-bef cal">
                    <a href="tel: 12345678">+38(098) 271 - 50 - 35</a>
                </li>

                <li className="flex">
                    <a href="#">
                        <img src={Face} alt="" />
                    </a>

                    <a href="#">
                        <img src={Insta} alt="" />
                    </a>

                    <a href="#">
                        <img src={Tg} alt="" />
                    </a>

                    <span>
                        Свежие видео <br />
                        у нас на канале
                    </span>
                </li>
            </ul>
            </div>

        </div>   
    )
}

export default Footer


