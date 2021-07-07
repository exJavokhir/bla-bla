import './main.scss'

import Arrow from '../../assets/icons/arrow.png'


import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'
import Image6 from '../../assets/images/image6.png'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TagSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                    slidesToScroll: 1,
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
        <div className="home-blocks">
            <div className="slider-slick">
                <Slider {...settings}>
                    <div
                        className="item-home one"
                    >
                        <div className="top">
                            <span className="title">Каркасные дома</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom">
                            <a href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div
                        className="item-home two"
                    >
                        <div className="top">
                            <span className="title">Дома из <br /> клеёного бруса</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom alone">
                            <a href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="item-home thre"
                     >
                        <div className="top">
                            <span className="title">Дома из брёвен</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom">
                            <a href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="item-home four"
                    >
                        <div className="top">
                            <span className="title">Фахверковые <br /> дома</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom alone">
                            <a href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="item-home five"
                    >
                        <div className="top">
                            <span className="title">Беседки</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom">
                            <a href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="item-home six"
                    >
                        <div className="top">
                            <span className="title">Ремонт и <br /> отделка</span>
                            <span className="sircle"></span>
                        </div>

                        <div className="bottom alone">
                            <a id="hover" href="#" className="primary">Подробнее
                                <img src={Arrow} alt="" />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default TagSlider