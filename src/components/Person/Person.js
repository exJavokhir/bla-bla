import './response.scss'
import './main.scss'

import Arrow from '../../assets/icons/arrow.png'

import Men from '../../assets/images/men.png'



const Person = ()=>{
    return(
        <div className="inner">
            <div className="container">
                <div className="page-top">
                    <div className="links">
                        <a className="primary" href="#">Смотреть все
                            <img src={Arrow} alt="" />
                        </a>
                    </div>

                    <div className="text-block">
                        <h1>
                            Готовы <b>начать строить дом</b> <br />
                            с надежной компанией?
                        </h1>
                    </div>
                </div>

                <div className="page-bottom">
                    <div className="left">
                        <span className="pos-span">Здравствуйте, меня зовут <br />
                            Ярослав  Доля. <br />
                            Я руководитель компании DOM-D</span>
                        <img src={Men} alt="" />
                    </div>
                    <div className="right">
                        <div className="row">
                            <div className="col">
                                <p className="has-mar">
                                    Мы не просто <b>предоставляем</b> услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.
                                </p>
                                <p className="has-mars">
                                    Наша команда стремится к полной <b>прозрачности</b> в работе, поэтому мы с удовольствием показываем каждый процесс строительства, без прикрас.
                                </p>
                                <p>
                                    Мы <b>знаем все</b> о строительстве
                                    деревянных домов и строительных работах
                                </p>
                            </div>
                            <div className="col">
                                <p className="has-margin">
                                    Вы не <b>рискуете</b> своими деньгами, нервами и временем. Мы берем на себя полную материальную ответственность по договору за дом, работы, сроки выполнения каждого этапа работы
                                </p>
                                <p className="has-margins">
                                    Мы <b>гарантируем</b> Ваше минимальное вовлечение в рутину строительства, беря на себя весь комплекс строительных работ
                                </p>
                                <p>
                                    <b>Проектируем</b> и строим авторские дома из дерева и клееного бруса
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person