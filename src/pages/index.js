import React from 'react'










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
       </div>
    )
  }

}

export default IndexPage
