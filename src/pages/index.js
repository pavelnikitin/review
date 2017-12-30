import React from 'react'
import advantage from '../img/advantage.jpg'
import phone from '../img/phone.jpg'










class IndexPage extends React.Component {


  constructor(props) {
    super(props);

  }



  render() {
   

    return (
  <div className="banner container-fluid">
      <div className="banner-background row text-center">
              <div className="banner-girl"></div> 
              <h1 className="colorheader">
                 <div className="banner-conversion">Рост конверсии до 20%</div>
              Отзывы на заказ
              </h1>
               <div className="banner-overlay"></div> 
      </div>
      <div className="row advantage text-center">
              <h1>ПРЕИМУЩЕСТВА ОТЗЫВОВ</h1>
              <div className="col-xs-12 ">
                 <div className="slash center-block"></div>
              </div>
              <div className="container-fluid">
                <div className="row advantage-description">
                  <div className="col-xs-6 advantage-image">
                     <img src={advantage} alt="" className="img-responsive"/>
                  </div>
                  <div className="col-xs-6 advantage-list">
                     <h6>
                        <p><br/>➢Повышение конверсии&nbsp;за счет положительных решений, принятых на основании отзывов;<br/></p>
                        <p>➢Наполнение&nbsp;площадок с высокими показателями&nbsp;информацией о своем сайте;<br/></p>
                        <p>➢Доверие&nbsp;своих потенциальных клиентов к товарам и самой компании/бренду;<br/></p>
                        <p>➢Возможность&nbsp;выделиться на фоне конкурентов;<br/></p>
                        <p>➢Передачу веса&nbsp;от сайта-донора на свой сайт;<br/></p>
                        <p>➢Уникальные,&nbsp;интересные тексты&nbsp;отзывов;<br/></p>
                        <p>➢Положительную репутацию.</p>
                     </h6>
                  </div>                  
                </div>
              </div> 
      </div>
      <div className="row wholeft text-center">
          <h1>КТО ЖЕ ОСТАВИТ ОТЗЫВ?</h1>
          <div className="col-xs-12 ">
             <div className="wholeft-slash center-block"></div>
          </div>
          <div className="container-fluid">
            <div className="row wholeft-description">
              <div className="col-xs-6 wholeft-image">
                 <img src={phone} alt="" className="img-responsive"/>
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
         <div className="ourwork-slash center-block"></div>
      </div>
      <div className="container-fluid">
        <div className="row ">
                      
        </div>
      </div> 
</div>  
  </div>
       
    )
  }

}

export default IndexPage
