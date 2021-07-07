import './response.scss'
import './main.scss'

import {
    Header,
    Footer
}from '../index'

import {
    Tags,
    Some,
    Person,
    Slick,
    TagSlider,
    PersonSlider
}from '../index'

import Black from '../../assets/images/black-bg.png'
import MenBg from '../../assets/images/mens.png'

import Youtube from '../../assets/icons/youtube.png'
import Viber from '../../assets/icons/viber.png'
import Telegram from '../../assets/icons/telegram.png'

import Photo1 from '../../assets/images/photo1.png'
import Photo2 from '../../assets/images/photo2.png'
import Photo3 from '../../assets/images/photo3.png'
import Photo4 from '../../assets/images/photo4.png'
import Photo5 from '../../assets/images/photo5.png'
import Photo6 from '../../assets/images/photo6.png'
import Form from '../../assets/images/form.png'

const Home = ()=>{
    return (
        <div className="home-wrapper">
            <header>
                <Header></Header>
            </header>

            <main>
                <div className="home-tags">
                    <div className="inner-tags container">
                        <div className="block-title">
                            <h1 className="item-title">
                                Оказываем  услуги комплексно, <br /> <span> совмещая отдельные виды работ</span>
                            </h1>
                        </div>

                        <Tags></Tags> 
                        <TagSlider/>
                    </div>    
                <div/> 

                        <div className="video-name">
                            <h1 className="bla">Приступим cегодня</h1>
                            <p className="bla-bla">Напишите нам, чтобы получить персональное предложение</p>
                        </div>
                       <div className="container">
                        <div className="home-video"
                            style={{
                                backgroundImage: `url(${Black})`
                            }}
                        >
                            <div className="left">
                                <h1 className="video-title">Cтроительство дома, <br />
                                    не покажешь картинкой</h1>
                                <p className="video-text">
                                    За каждым домом стоит целая <br /> история, смотри полезные <br />  презентации у нас на канале.
                                </p>
                                <a href="#" className="primary">Заказать расчет</a>
                            </div>
                            <div className="right">
                                <div className="vide">
                                    <iframe src="https://www.youtube.com/embed/gAffADER-qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                       </div>

                        <div className="some-info">
                            <div className="inner container">
                                <div className="title">
                                    <h1 className="some">Заботимся о Вашем <span>спокойствии</span></h1>
                                </div>

                                <Some></Some>

                            </div>
                        </div>


                        <div className="home-images">
                            <div className="image-title">
                                <h1 className="image-name">
                                    <b>Посмотрите на готовые дома</b> с комплексом <br />
                                    отделки и прокладки коммуникаций.
                                </h1>
                            </div>

                            <div className="images">
                                <div className="photos">
                                    <img src={Photo1} alt="" />
                                </div>
                                <div className="photos">
                                    <img src={Photo2} alt="" />
                                </div>
                                <div className="photos">
                                    <img src={Photo3} alt="" />
                                </div>
                                <div className="photos">
                                    <img src={Photo4} alt="" />
                                </div>
                                <div className="photos">
                                    <img src={Photo5} alt="" />
                                </div>
                                <div className="photos">
                                    <img src={Photo6} alt="" />
                                </div>
                            </div>
                        </div>  


                        <div className="site-author"
                            style={
                                {
                                    backgroundImage: `url(${MenBg})`
                                }
                            }
                        >
                            <Person></Person>
                            <PersonSlider/>
                        </div>

                        <div className="black-row">
                            <div className="inner-black container">
                                <div className="block-items">
                                    <h1>15</h1>
                                <span>лет опыта <br />
                                    стоительстве</span>
                                </div>
                            <div className="block-items">
                                <h1>15</h1>
                                <span>
                                    специалистов <br /> в штате
                                </span>
                            </div>
                            <div className="block-items">
                                <h1>52</h1>
                                <span>
                                    построенных <br /> домов
                                </span>
                            </div>
                            <div className="block-items">
                                <img src={Youtube} alt="" />
                                <span>
                                    Наши ВИДЕО <br/>
                                    об отделке и устройстве смотрите на канале DOM-D
                                </span>
                            </div>
                            </div>
                        </div>

                        <div className="slick-row">
                            <div className="row-title">
                                <h1>
                                    Используем только <b>
                                    экологически чистые <br /> и профессиональные материалы
                                    </b>
                                </h1>
                            </div>

                            <Slick></Slick>                            
                        </div>

                        <div className="form-place" 
                            style={
                                {
                                    backgroundImage: `url(${Form})`
                                }
                            }
                        >
                            <div className="container">
                            <div className="inner-place">
                                <div className="place-top">
                                    <h1 className="place-title">Наши контакты</h1>
                                </div>

                                <div className="place-bottom">
                                    <div className="left">
                                        <h2 className="left-title">
                                            Задать вопрос
                                        </h2>
                                        <p className="left-text">
                                            Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее время!
                                        </p>

                                        <form action="#">
                                            <textarea placeholder="Ваш вопросы" name="" id="" cols="30" rows="10"></textarea>

                                            <input type="number" placeholder="Телефон" />

                                            <button className="primary">Отправить вопрос</button>
                                        </form>
                                    </div>


                                    <div className="right">
                                        <h2 className="left-title">
                                            Мы на связи
                                        </h2>

                                        <p className="email">
                                            Украина, г. Одесса <br />
                                            ул. Комитетская, 24Б
                                        </p>

                                        <p className="email">
                                            Эл.почта: <a href="mailto: odessadomd@gmail.com"> odessadomd@gmail.com</a>
                                        </p>

                                        <div className="link-connect">
                                            <a href="#">Viber
                                                <img src={Viber} alt="" />
                                            </a>
                                            <a href="#">Telegram
                                                <img src={Telegram} alt="" />
                                            </a>
                                        </div>

                                        <h1 className="phone">+38 (098) 271-50-35</h1>

                                        <span className="online">Мы на связи</span>
                                        <a href="#" className="primary fuck">ПЕРЕЗВОНИТЬ МНЕ</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </main>

            <footer 
                style={
                    {
                        backgroundColor: 'black'
                    }
                }
            >
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Home