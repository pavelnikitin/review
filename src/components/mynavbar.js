import React, { Component } from 'react'
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const Menu = styled.div`
  border-bottom: 2px solid MediumPurple;
  position: fixed;
  z-index: 2000;
  width: 100%;
  background-color: #fff;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;





export default class MyNavbar extends Component {
    render() {
        return (
            <div>
            <ResponsiveMenu
          menuOpenButton={<div className="openbutton"><i className="ion-navicon-round"/></div>}
          menuCloseButton={<div className="closebutton"></div>}
          changeMenuOn="500px"
          menu={
            <Menu>
              <ul>
                <li>
                   <Scrollchor animate={{duration: 600}} to="#_0" className="nav-link"><i className="ion-ios-home"/></Scrollchor>
                </li>
                <li>
                <Scrollchor animate={{duration: 600}}  to="#_1" className="nav-link">Преимущества</Scrollchor>
                </li>
                <li>
                <Scrollchor animate={{duration: 600}}  to="#_2" className="nav-link">Об отзывах</Scrollchor>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </Menu>
          }
        />
            </div>
        )
    }
}
