import React, { Component } from 'react'
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};


export default class MyNavbar extends Component {

  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
}

componentDidMount() {

  Events.scrollEvent.register('begin', function() {
    
  });

  Events.scrollEvent.register('end', function() {
   
  });

}
scrollToTop() {
  scroll.scrollToTop();
}
scrollTo() {
  scroller.scrollTo('scroll-to-element', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}
scrollToWithContainer() {

  let goToContainer = new Promise((resolve, reject) => {

    Events.scrollEvent.register('end', () => {
      resolve();
      Events.scrollEvent.remove('end');
    });

    scroller.scrollTo('scroll-container', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });

  });

  goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }));
}
componentWillUnmount() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}

    render() {
        return (
            <ResponsiveMenu
          menuOpenButton={<div className="openbutton"><i className="ion-navicon-round"/></div>}
          menuCloseButton={<div className="closebutton"></div>}
          changeMenuOn="800px"
          menu={
            <div className="mymenu">
              <ul>
                <li>
                <Link activeClass="active" className="test1" to="home" spy={true} smooth={true} duration={500} offset={-160}><i className="ion-ios-home"/></Link>
                </li>
                <li>
                <Link activeClass="active" className="test1" to="_1" spy={true} smooth={true} duration={500} >Услуги</Link>
                </li>
                <li>
                <Link activeClass="active" className="test1" to="_3" spy={true} smooth={true} duration={500} >Наши работы</Link>
                </li>
                <li>
                <Link activeClass="active" className="test1" to="_4" spy={true} smooth={true} duration={500} >Отзыв о нас</Link>
                </li>
                <li>
                <Link activeClass="active" className="test1" to="_5" spy={true} smooth={true} duration={500} >Тарифные планы</Link>
                </li>
                <li>
                <Link activeClass="active" className="test1" to="_6" spy={true} smooth={true} duration={500} >Обратная связь</Link>
                </li>
              </ul>
            </div>
          }
        />
          
        )
    }
}
