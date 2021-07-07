import './resonse.scss'
import './main.scss'

import Arrow from '../../assets/icons/arrow.png'

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'
import Image6 from '../../assets/images/image6.png'


const Tags = ()=>{
    return(
        <div className="home-block">
            <div 
                className="item-home"
                style={{
                    backgroundImage: `url(${Image1})`
                }}
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
                className="item-home"
                style={{
                    backgroundImage: `url(${Image2})`
                }}
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
            <div className="item-home"
                style={{
                    backgroundImage: `url(${Image3})`
                }}
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
            <div className="item-home"
                style={{
                    backgroundImage: `url(${Image4})`
                }}
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
            <div className="item-home"
                style={{
                    backgroundImage: `url(${Image5})`
                }}
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
            <div className="item-home"
                style={{
                    backgroundImage: `url(${Image6})`
                }}
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
        </div>
    )
}

export default Tags