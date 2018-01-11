import React, { Component } from 'react';
import $ from 'jquery';
import Notifications, {notify} from 'react-notify-toast';

function validate(contactName, contactEmail, contactMessage) {
  // true means invalid, so our conditions got reversed
  return {
    contactName: contactName.length === 0,
    contactEmail: contactEmail.length === 0,
    contactMessage: contactMessage.length === 0, 
  };
}

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
  
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this); 
  }

  handleNameChange(event) {
    this.setState({
      contactName: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      contactEmail: event.target.value,
    });
  }

  handleMessageChange(event) {
    this.setState({
      contactMessage: event.target.value,
    });
  }

  canBeSubmitted() {
    const errors = validate(this.state.contactName, this.state.contactEmail, this.state.contactMessage);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleSubmit(event) {

    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }

    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending…' });

    $.ajax({

      url:  'mailer.php',
      type: 'POST',
      data: {

        "form_name": this.state.contactName,
        "form_email": this.state.contactEmail,
        "form_msg": this.state.contactMessage
      },
      cache: false,
      success: function (data) {
        
        this.setState({
          contactName: '',
          contactEmail: '',
          contactMessage: '',
        });

        let successColor = { background: 'rgba(64, 214, 67, 0.8);', text: "#FFFFFF" };
        notify.show('Ваше сообщение доставлено, спасибо!', 'custom', 3000, successColor);

      }.bind(this),

      error: function (xhr, status, err) {
        let errorColor = { background: 'rgba(255, 87, 34, 0.8)', text: "#FFFFFF" };
        notify.show('Извините,произошла ошибка при отправке!', 'custom', 3000, errorColor);
      }.bind(this)

    });

  }

  render() {

    const errors = validate(this.state.contactName, this.state.contactEmail, this.state.contactMessage);
    const isDisabled = Object.keys(errors).some(x => errors[x])
  
  
    return (
      
      <form id="contactForm" method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
      <Notifications />
        <fieldset className="form-group">
          <input   type="text" className="form-control" placeholder="Введите ваше имя" value={this.state.contactName}  id="form_name" onChange={this.handleNameChange} />
        </fieldset>

        <fieldset className="form-group">
          <input  name="email" className="form-control"  placeholder="Введите ваш email"  value={this.state.contactEmail}  id="form_email" type="email" onChange={this.handleEmailChange} />
        </fieldset>

        <fieldset className="form-group">
          <textarea name="message" className="form-control"  placeholder="Введите сообщение" value={this.state.contactMessage}  id="form_msg" onChange={this.handleMessageChange} ></textarea>
        </fieldset>
        <button disabled={isDisabled} type="submit" value="Submit"  className="btn btn-primary pull-right" id="btn-submit" > отправить</button>
      </form>
      
    );
  }
}

export default ContactForm;
