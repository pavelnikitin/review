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
import ContactForm1 from '../components/contactform1'


class IndexPage extends React.Component {


  constructor(props) {
    super(props);

    
  }

 


  render() {


    return (
      
      <div className=" row">
        <div className="banner row">
          <div className="banner-background row text-center">
            <div className="banner-girl"></div>
            <h1 className="colorheader">
              <div className="banner-conversion">Рост конверсии до 20%</div>
              Отзывы на заказ
              </h1>
            <div className="banner-overlay"></div>
          </div>
        </div>
        <div className="row advantage text-center">
          <h1>ПРЕИМУЩЕСТВА ОТЗЫВОВ</h1>
          <div className="col-xs-12 ">
            <div className="slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row advantage-description">
              <div className="col-xs-6 advantage-image">
                <img src={advantage} alt="" className="img-responsive" />
              </div>
              <div className="col-xs-6 advantage-list">
                <h6>
                  <p><br />➢Повышение конверсии&nbsp;за счет положительных решений, принятых на основании отзывов;<br /></p>
                  <p>➢Наполнение&nbsp;площадок с высокими показателями&nbsp;информацией о своем сайте;<br /></p>
                  <p>➢Доверие&nbsp;своих потенциальных клиентов к товарам и самой компании/бренду;<br /></p>
                  <p>➢Возможность&nbsp;выделиться на фоне конкурентов;<br /></p>
                  <p>➢Передачу веса&nbsp;от сайта-донора на свой сайт;<br /></p>
                  <p>➢Уникальные,&nbsp;интересные тексты&nbsp;отзывов;<br /></p>
                  <p>➢Положительную репутацию.</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row wholeft text-center">
          <h1>КТО ЖЕ ОСТАВИТ ОТЗЫВ?</h1>
          <div className="col-xs-12 ">
            <div className="simple-slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row wholeft-description">
              <div className="col-xs-6 wholeft-image">
                <img src={phone} alt="" className="img-responsive" />
              </div>
              <div className="col-xs-6 wholeft-description">
                <div className="wholeft-text">
                  <span>Наши отзывы готовит группа сотрудников с различным стилем речи и написания текста. Все тексты отзывов создаются индивидуально для каждого проекта с уникальностью не менее 95%. Именно такие тексты вызывают доверие других пользователей.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ourwork text-center">
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

        <div className="row result text-center">
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
        <div className="row result text-center">
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
                          <a data-toggle="modal" data-target="#feedbackForm1">
                            <h3 className="colorheader">Отправить заявку</h3>
                          </a>
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
                          <a data-toggle="modal" data-target="#feedbackForm2">
                            <h3 className="colorheader">Отправить заявку</h3>
                          </a>
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
                          <a data-toggle="modal" data-target="#feedbackForm3">
                            <h3 className="colorheader">Отправить заявку</h3>
                          </a>
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
                      <div className="send center-block">
                        <a data-toggle="modal" data-target="#modal" >
                          <h3 className="video-example colorheader">Показать пример</h3>
                        </a>
                      </div>
                    </div>
                    <div className="center-block send">
                      <a data-toggle="modal" data-target="#feedbackForm4">
                        <h3 className="colorheader">Мне это подходит</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className ="row feedback text-center">
          <h1>ВАМ НЕ НУЖНЫ СТАНДАРТНЫЕ ОТЗЫВЫ ?</h1>
          <h3>Напишите нам и мы постараемся вам помочь</h3>
          <a data-toggle="modal" data-target="#feedbackForm5">
            <button className ="feedback-button">Обратная связь</button>
          </a>
        </div>
        <div className="row contacts text-center">
            <div className="contacts-overlay">
                <h1>Остались вопросы? Свяжитесь с нами!</h1>
                <div className="contacts-form col-xs-12 col-sm-4 col-sm-offset-1">
                    <ContactForm1/>
                </div>
                <div className="contacts-viber col-xs-12 col-sm-6">
                    <div className="row contacts-phone text-right">
                        <div className="col-xs-12 ">
                            <h3>+7 929 165 91 29
                                <img src={telefon} alt="telefon" className="telefon"/>
                                <img src={whatsapp} alt="whatsapp" className="whatsapp"/>
                                <img src={viber} alt="viber" className="viber"/>
                            </h3>
                            <h3>sales@otziv-na-zakaz.ru
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
