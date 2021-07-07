import './main.scss'



import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PersonSlider = () => {
    const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="innerslick">
            <div className="container">
                    <div className="page-bottom">
                <div className="slick-slider-person">
                            <div className="right">
                                <div className="row">
                    <Slider {...settings}>
                                    <div className="col">
                                        <p className="has-mar">
                                            Мы не просто <b>предоставляем</b> услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.
                                        </p>
                                    </div>    
                                    <div className="col">
                                        <p className="has-mars">
                                            Наша команда стремится к полной <b>прозрачности</b> в работе, поэтому мы с удовольствием показываем каждый процесс строительства, без прикрас.
                                        </p>
                                    </div>   
                                    <div className="col"> 
                                        <p>
                                            Мы <b>знаем все</b> о строительстве
                                            деревянных домов и строительных работах
                                        </p>
                                    </div>    
                                    <div className="col">
                                        <p className="has-margin">
                                            Вы не <b>рискуете</b> своими деньгами, нервами и временем. Мы берем на себя полную материальную ответственность по договору за дом, работы, сроки выполнения каждого этапа работы
                                        </p>
                                    </div>    
                                    <div className="col">
                                        <p className="has-margins">
                                            Мы <b>гарантируем</b> Ваше минимальное вовлечение в рутину строительства, беря на себя весь комплекс строительных работ
                                        </p>
                                    </div>
                                    <div className="col">    
                                        <p>
                                            <b>Проектируем</b> и строим авторские дома из дерева и клееного бруса
                                        </p>
                                    </div>
                    </Slider>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonSlider