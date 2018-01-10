import React, { Component } from 'react';
import $ from 'jquery';


class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      message: '',
      type: ''
    };

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

  handleSubmit(event) {

    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending…' });

    $.ajax({

      url:  process.env.NODE_ENV !== "production" ? '../../mailer.php' : 'mailer.php',
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
          <input type="text" value={this.state.contactName} className="form-control" id="form_name" onChange={this.handleNameChange} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="form_email">E-mail:</label>
          <input name="email" value={this.state.contactEmail} className="form-control" id="form_email" type="email" onChange={this.handleEmailChange} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="form_msg">Message:</label>
          <textarea name="message" value={this.state.contactMessage} className="form-control" id="form_msg" onChange={this.handleMessageChange} ></textarea>
        </fieldset>
        <button type="submit" value="Submit" className="btn--cta" id="btn-submit" />

      </form>
    );
  }
}

export default ContactForm;
