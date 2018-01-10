import React, { Component } from 'react';
import $ from 'jquery';

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
      message: '',
      type: '',
      touched: {
        contactName: false,
        contactEmail: false,
        contactMessage: false
      }
    }

    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }



  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
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

        // Success..
        this.setState({
          contactName: '',
          contactEmail: '',
          contactMessage: '',
          type: 'success',
          message: 'Мы получили ваше сообщение. Спасибо!'

        });

      }.bind(this),

      error: function (xhr, status, err) {
        this.setState({ type: 'danger', message: 'Извините, произошла ошибка,пожалуйста попробуйте еще раз в другое время' });
      }.bind(this)

    });

  }

  render() {

    const errors = validate(this.state.contactName, this.state.contactEmail, this.state.contactMessage);
    const isDisabled = Object.keys(errors).some(x => errors[x])
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      
      return hasError ? shouldShow : false;
    };

    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} >
                     {this.state.message}
                   </div>;
    } else {null}

    return (
      <form id="contactForm" method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
      <h2>{status}</h2>
        <fieldset className="form-group">
          <label htmlFor="form_name">Name</label>
          <input className={shouldMarkError('contactName') ? "error" : ""} onBlur={this.handleBlur('contactName')} type="text" value={this.state.contactName}  id="form_name" onChange={this.handleNameChange} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="form_email">E-mail:</label>
          <input className={shouldMarkError('contactEmail') ? "error" : ""} onBlur={this.handleBlur('contactEmail')} name="email" value={this.state.contactEmail}  id="form_email" type="email" onChange={this.handleEmailChange} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="form_msg">Message:</label>
          <textarea className={shouldMarkError('contactMessage') ? "error" : ""} onBlur={this.handleBlur('contactMessage')} name="message" value={this.state.contactMessage}  id="form_msg" onChange={this.handleMessageChange} ></textarea>
        </fieldset>
        <button disabled={isDisabled} type="submit" value="Submit" className="btn--cta" id="btn-submit" />

      </form>
    );
  }
}

export default ContactForm;
