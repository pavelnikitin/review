import React, { Component } from 'react';
import { Modal, Button, OverlayTrigger } from 'react-bootstrap'
import ContactForm from './contactform'



export default class MyModal extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = { showModal: false };
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
	}

	render() {
		

		return (
			<div>
			<a onClick= {this.handleShow}>
			<h3 className="colorheader">Отправить заявку</h3>
		    </a>

				<Modal show={this.state.showModal} onHide={this.handleClose}>
					
					<Modal.Body>
					<div className="row">
					<div className="panel panel-info">
						<div className="panel-heading">
							<h2 className="h3 panel-title text-center">{this.props.heading}</h2>
						</div>
						<div className="panel-body">
							<ContactForm url={'mailer.php'}/>
						</div>
					</div>
				</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Закрыть</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


