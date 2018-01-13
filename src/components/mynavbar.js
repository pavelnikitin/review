import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor';

class MyNavbar extends Component {
    render() {
        return (
            <div>
            <Navbar fixedTop={true}  collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                     <Scrollchor to="#0" className="nav-link">Отзывы на заказ</Scrollchor>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        <Scrollchor to="#1" className="nav-link">Преимущества</Scrollchor>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                         <Scrollchor to="#2" className="nav-link">Об отзывах</Scrollchor>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                         <Scrollchor to="#3" className="nav-link">Наши работы</Scrollchor>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Scrollchor to="#4" className="nav-link">Результат</Scrollchor>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                       <Scrollchor to="#5" className="nav-link">Тарифы</Scrollchor>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                         <Scrollchor to="#6" className="nav-link">Контакты</Scrollchor>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            </div>
        );
    }
}

export default MyNavbar;