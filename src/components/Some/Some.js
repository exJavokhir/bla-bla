import './main.scss'
import './response.scss'

import Info1 from '../../assets/icons/info1.png'
import Info2 from '../../assets/icons/info2.png'
import Info3 from '../../assets/icons/info3.png'
import Info4 from '../../assets/icons/info4.png'
import Info5 from '../../assets/icons/info5.png'
import Info6 from '../../assets/icons/info6.png'


const Some = ()=>{
    return(
        <div className="some-info">

            <div className="items">
                <span className="img">
                    <img src={Info1} alt="" />
                </span>
                <div className="info">
                    <span className="name">Не поднимаем стоимость</span>
                    <span className="text">Фиксируем <b>стоимость</b> работ в договоре</span>
                </div>
            </div>

            <div className="items">
                <span className="img">
                    <img src={Info2} alt="" />
                </span>
                <div className="info">
                    <span className="name">
                        Поэтапная оплата
                        
                    </span>
                    <span className="text">Оплата каждого вида работ <b>разбита</b> на 2 части
                        (50% аванс 50% по завершению)</span>
                </div>
            </div>

            <div className="items">
                <span className="img">
                    <img src={Info3} alt="" />
                </span>
                <div className="info">
                    <span className="name">Соблюдаем сроки</span>
                    <span className="text">Несем <b>ответственность</b> за соблюдение сроков.</span>
                </div>
            </div>

            <div className="items">
                <span className="img">
                    <img src={Info4} alt="" />
                </span>
                <div className="info">
                    <span className="name">Экологичность</span>
                    <span className="text">Дом <b>строится</b> из натуральных материалов</span>
                </div>
            </div>

            <div className="items">
                <span className="img">
                    <img src={Info5} alt="" />
                </span>
                <div className="info">
                    <span className="name">Самостоятельно</span>
                    <span className="text">Закупаем и <b>доставляем</b> на объект, качественные материалы и расходники</span>
                </div>
            </div>

            <div className="items">
                <span className="img">
                    <img src={Info6} alt="" />
                </span>
                <div className="info">
                    <span className="name">Проводим уборку</span>
                    <span className="text">В процессе работ и <b>вывозим</b> мусор после завершения работ. </span>
                </div>
            </div>

        </div>
    )
}

export default Some