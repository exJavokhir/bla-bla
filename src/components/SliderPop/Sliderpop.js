
import 'antd/dist/antd.css'
import { Carousel } from 'antd'

import './main.scss'
import './response.scss'

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'



const SliderPop = ()=>{

    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const contentStyle = {
        height: '160px',
        dots: false,
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return(
        <div className="inner-pop-slider">

            <Carousel afterChange={onChange}>
                <div>
                    <li className="li">
                        <input type="radio" name="cheks" id="bir" />
                        <label htmlFor="bir"
                            style={
                                {
                                    backgroundImage: `url(${Image1})`
                                }
                            }
                        >
                        </label>
                        <span>
                            Беседки
                        </span>
                    </li>
                </div>
                <div>
                    <li className="li">
                        <input type="radio" name="cheks" id="iki" />
                        <label htmlFor="iki"
                            style={
                                {
                                    backgroundImage: `url(${Image2})`
                                }
                            }
                        >
                        </label>
                        <span>
                            Фахверковые дома
                        </span>
                    </li>
                </div>
                <div>
                    <li className="li">
                        <input type="radio" name="cheks" id="uch" />
                        <label htmlFor="uch"
                            style={
                                {
                                    backgroundImage: `url(${Image5})`
                                }
                            }
                        >
                        </label>
                        <span>
                            Дома из брёвен
                        </span>
                    </li>
                </div>
                <div>
                    <li className="li">
                        <input type="radio" name="cheks" id="tor" />
                        <label htmlFor="tor"
                            style={
                                {
                                    backgroundImage: `url(${Image3})`
                                }
                            }
                        >

                        </label>
                        <span>
                            Дома из клеёного бруса
                        </span>
                    </li>
                </div>
                <div>
                    <li className="li">
                        <input type="radio" name="cheks" id="bew" />
                        <label htmlFor="bew"
                            style={
                                {
                                    backgroundImage: `url(${Image4})`
                                }
                            }
                        >

                        </label>
                        <span>
                            Каркасные дома
                        </span>
                    </li>
                </div>
            </Carousel>
        </div>
    )

}

export default SliderPop