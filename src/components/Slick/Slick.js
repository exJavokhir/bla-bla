import './main.scss'
import './response.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slick1 from '../../assets/images/slick1.png'
import Slick2 from '../../assets/images/slick2.png'
import Slick3 from '../../assets/images/slick3.png'
import Slick4 from '../../assets/images/slick4.png'

import Slider from "react-slick";

const Slick = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            slidesToShow: 2,
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
    return(
        <div className="ortaga-kel">
            <div className="inner container">
                <Slider {...settings} className="slick-col">
                    <div className="sli-blo">
                        <img src={Slick1} alt="" />
                    </div>
                    <div className="sli-blo">
                        <img src={Slick2 } alt="" />
                    </div>
                    <div className="sli-blo">
                        <img src={Slick3} alt="" />
                    </div>
                    <div className="sli-blo">
                        <img src={Slick4} alt="" />
                    </div>
                    <div className="sli-blo">
                        <img src={Slick1} alt="" />
                    </div>
                    <div className="sli-blo">
                        <img src={Slick2} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Slick