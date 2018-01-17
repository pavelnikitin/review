import React from 'react'
import advantage from '../img/advantage.jpg'
import phone from '../img/phone.jpg'
import Carousel from '../components/carousel'
import resultimage from '../img/result-image.png'
import newpng from '../img/new.png'
import viber from '../img/viber.png'
import whatsapp from '../img/whatsapp.png'
import telefon from '../img/telefon.png'
import gmail from '../img/gmail.png'
import ContactForm from '../components/contactform'
import MyModal from '../components/mymodal'




class IndexPage extends React.Component {


  constructor(props) {
    super(props);

    
  }

 


  render() {


    return (
      
      <div>
      <div className="banner">
      <div className="banner-background row text-center">
          <div className="banner-girl"></div>
          <h1 className="colorheader">
              <div className="banner-conversion">Рост конверсии до 20%</div>
              Результативное продвижение
          </h1>
          <h4>
              СДЕЛАЕМ БЕСПЛАТНЫЙ 
              <br/> АУДИТ САЙТА</h4>
          <div className="banner-overlay"></div>
      </div>
  </div>
        <div className="row whatyouget text-center" id="_1" >
          <h1>ЧТО ВЫ ПОЛУЧИТЕ</h1>
          <div className="col-xs-12 ">
            <div className="slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row whatyouget-description">
              <div className="col-xs-5 whatyouget-image">
                <img src={advantage} alt="" className="img-responsive" />
              </div>
              <div className="col-xs-7   whatyouget-list">
                <h6>
                  <div className="whatyouget-text center-block">
                  <p><br />➢&nbsp;ЭКСПРЕСС-АНАЛИЗ SEO ОПТИМИЗАЦИИ САЙТА;<br /></p>
                  <p>➢&nbsp;ЭКСПРЕСС-АНАЛИЗ КОНТЕКСТНОЙ РЕКЛАМЫ;<br /></p>
                  <p>➢&nbsp;ПЕРВИЧНЫЙ АНАЛИЗ ЮЗАБИЛИТИ;<br /></p>
                  <p>➢ЭКСПРЕСС-АНАЛИЗ КОНКУРЕНТОВ;<br /></p>
                  <p>➢&nbsp;ПЕРЕДАЧУ ВЕСА&nbsp;ОТ САЙТА ДОНОРА НА СВОЙ САЙТ;<br /></p>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row prepare text-center" id="_2">
          <h1>ПОДГОТОВИМ ОТЗЫВЫ</h1>
          <div className="col-xs-12 ">
            <div className="simple-slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row prepare-description">
              <div className="col-xs-6 prepare-image">
                <img src={phone} alt="" className="img-responsive" />
              </div>
              <div className="col-xs-6 prepare-description">
                <div className="prepare-text">
                  <span>Наши отзывы готовит группа сотрудников с различным стилем речи и написания текста. Все тексты отзывов создаются индивидуально для каждого проекта с уникальностью не менее 95%. Именно такие тексты вызывают доверие других пользователей.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ourwork text-center" id="_3">
          <h1>НАШИ РАБОТЫ</h1>
          <div className="col-xs-12 ">
            <div className="slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <Carousel />
            </div>
          </div>
        </div>

        <div className="row result text-center" id="_4">
          <h1>РЕЗУЛЬТАТ НАШЕГО КЛИЕНТА В СВОЕЙ НИШЕ</h1>
          <div className="col-xs-12 ">
            <div className="simple-slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row result-description">
              <div className="col-xs-2">
                <img src={resultimage} alt="image" className="result-image img-responsive" />
              </div>
              <div className="col-xs-10 result-text">
                <span>
                  <p>Раньше никто в нашей компании не знал, что есть люди, у которых можно заказать видео отзыв. Обходились
                                своими силами. Мы тогда уже заметили, что наличие такого отзыва повышает интерес к сайту.</p>
                  <p>Проблема была в том, что отзыва от клиента не допросишься. То у него времени нет, то забыл. А
                                многие просто стесняются говорить на камеру. Или не хотят светиться в интернете. У нас висело
                                2 ролика 2-летней давности. Смотрелось это грустно как-то.</p>
                  Когда мы узнали об этой услуге, то решили заказать видео отзывы. Взяли 10 штук. Разместили на сайте. Конверсия сразу подросла.
                            Мы за 2 года не могли такой добиться. Выросло среднее время нахождения посетителя на сайте. То
                            есть люди реально смотрят эти видео. Заявки с контекстной рекламы стали обходиться нам на 30%
                            дешевле. После этого заказали еще 30 фото отзывов с названием компании. Тоже на сайте выложили
                            и в соц. сетях. Очень хорошо они работают. Это заметно и по числу заявок от клиентов, и по тем
                            вопросам, которые они задают.
                            <p>В целом мы очень довольны!</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row result text-center" id="_5">
          <h1>ТАРИФНЫЕ ПЛАНЫ</h1>
          <div className="col-xs-12 ">
            <div className="slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row tariff">
              <div className="col-xs-12 col-sm-10 col-sm-push-1">
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="row">
                      <div className="beginner col-xs-8 col-xs-push-2 text-center">
                        <h3>«НАЧАЛЬНЫЙ»</h3>
                        <h2>
                          <span className="colorheader">10 000 </span> руб</h2>
                        <h5>50 отзывов</h5>
                        <h5 className="unicip">Уникальные ip</h5>
                        <div className="region center-block">
                          <h5>из вашего региона</h5>
                        </div>
                        <div className="send center-block">
                           <MyModal heading= 'Тариф начальный'/>
                        </div>
                        <h5 className="copyright">Услуги копирайтера включены</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="row">
                      <div className="standart col-xs-8 col-xs-push-2 text-center">
                        <h3>«СТАНДАРТНЫЙ»</h3>
                        <h2>
                          <span className="colorheader">17 000 </span>руб</h2>
                        <h5>100 отзывов</h5>
                        <h5 className="unicip">Уникальные ip</h5>
                        <div className="region center-block">
                          <h5>из вашего региона</h5>
                        </div>
                        <div className="send center-block">
                            <MyModal heading= 'Тариф стандартный'/>
                        </div>
                        <h5 className="copyright">Услуги копирайтера включены</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="row">
                      <div className="premium col-xs-8 col-xs-push-2 text-center">
                        <h3>«ПРЕМИУМ»</h3>
                        <h2>
                          <span className="colorheader">30 000</span> руб</h2>
                        <h5>200 отзывов</h5>
                        <h5 className="unicip">Уникальные ip</h5>
                        <div className="region center-block">
                          <h5>из вашего региона</h5>
                        </div>
                        <div className="send center-block">
                            <MyModal heading= 'Тариф премиум'/>
                        </div>
                        <h5 className="copyright">Услуги копирайтера включены</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h5 className="refinement">*окончательные цены зависят от Ваших конкретных требований</h5>
                </div>
                <div className="row">
                  <div className="video col-xs-10 col-xs-push-1 col-sm-6 col-sm-push-3">
                    <img src={newpng} alt="logo" className="img-responsive" />
                    <h3>10 ВИДЕО ОТЗЫВОВ</h3>
                    <h2>
                      <span className="colorheader">15 000</span> руб</h2>
                    <div className="video-description  center-block">
                      <h5>В некоторых нишах - этот отличный инструмент. Он показывает, что у вас хороший опыт работы
                                    и много довольных клиентов.</h5>
                      
                    </div>
                    <div className="center-block send">
                        <MyModal heading= 'Заказать видеоотзывы'/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row contacts text-center" id="_6">
            <div className="contacts-overlay">
                <h1>Остались вопросы? Свяжитесь с нами!</h1>
                <div className="contacts-form col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1">
                    <ContactForm url= {'mailer.php'}/>
                </div>
                <div className="contacts-viber col-xs-12 col-sm-6">
                    <div className="row contacts-phone text-right">
                        <div className="col-xs-12 ">
                            <h3><div className="phonenumber">+7 555 555 55 55</div>
                                <img src={telefon} alt="telefon" className="telefon"/>
                                <img src={whatsapp} alt="whatsapp" className="whatsapp"/>
                                <img src={viber} alt="viber" className="viber"/>
                            </h3>
                            <h3>example@email.com
                                <img src={gmail} alt="gmail" className="gmail"/>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

      
     
    )
  }

}

export default IndexPage
