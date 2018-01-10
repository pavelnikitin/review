import React, { Component } from 'react'
import Slider from 'react-slick'
import slide1 from '../img/slide1.png';
import slide2 from '../img/slide2.png';
import slide3 from '../img/slide3.png';
import slide4 from '../img/slide4.png';
import slide5 from '../img/slide5.png';
import slide6 from '../img/slide6.png';
import slide7 from '../img/slide7.png';
import slide8 from '../img/slide8.png';
import slide9 from '../img/slide9.png';


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
        <div className="container-slider col-xs-10 col-xs-offset-1">
        <Slider {...settings}>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide1} alt="slide"/></div>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide2} alt="slide"/></div>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide3} alt="slide"/></div>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide4} alt="slide"/></div>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide5} alt="slide"/></div>
          <div className="slide-wraper"><img className="img-responsive center-block" src={slide6} alt="slide"/></div>
        </Slider>
      </div>
    );
  }
}
