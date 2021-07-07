import './main.scss'
import './response.scss'

import Pops from '../../assets/icons/pop.png'
import Bef from '../../assets/icons/before.png'

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'

import {
    SliderPop
}from '../../Page/index'

const Pop = () => {
    function closePop (){
        document.querySelector('.pop').classList.remove('active')
    }
    return (
        <div className="pop-app"
            style={
                {
                    backgroundImage: `url(${Bef})`
                }
            }

        >
          
            <div className="pop-inner">
                <button className="close-pop"
                    onClick={closePop}
                >
                    <img src={Pops} alt="" />
                </button>
                <div className="top-joyi">
                    <div className="title">
                        <h2>
                            Укажите <b>площадь</b> и <b>материал стен</b> Вашего дома
                        </h2>
                </div>        

                        <div className="form">
                            <h3>Площадь вашего дома:</h3>
                            <li className="pad">
                                <input type="radio" name="chek" id="one" />
                                <label htmlFor="one">
                                    50-100м2
                                </label>
                            </li>
                            <li className="pad">
                                <input type="radio" name="chek" id="two" />
                                <label htmlFor="two">
                                    100-150м2
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="chek" id="thre" />
                                <label htmlFor="thre">
                                    больше 150
                                </label>
                            </li>
                        </div>

                        <div className="your-home">
                            <ul>
                                    <li>
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
                                     <li>
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
                                     <li>
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
                                <li>
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
                                <li>
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
                            </ul>
                        </div>

                        <div className="slider-pop">
                            <SliderPop></SliderPop>
                        </div>

                        <div className="style">
                            <ul>
                                <li>
                                    <input type="radio" name="still" id="key" />
                                    <label htmlFor="key">
                                        Под ключ
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" name="still" id="box" />
                                    <label htmlFor="box">
                                        Коробка
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="connection">
                            <form action>
                                <input type="text" placeholder="Ваш телефон" />
                                <button className="primary">Получить расчет</button>
                            </form>
                        </div>

                        <div className="agree">
                            <input type="radio" checked id="agre"/>
                            <label htmlFor="agre">
                                Вы соглашаетесь с условиями <b>
                                    обработки персональных данных
                                </b>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Pop