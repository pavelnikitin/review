import React, { Component } from 'react';

class ContactForm1 extends Component {
    render() {
        return (
            <div>
            <form id="contactForm2" action="/feedback/process-contact-form.php" enctype="multipart/form-data" novalidate>
        
            <div className="form-group has-feedback">
                <label htmlFor="name" className="control-label">Введите ваше имя*:</label>
                <input type="text" name="name" data-name="Введите ваше имя*" className="form-control" required="required" defaultValue="" minlength="2"
                    maxlength="30"/>
                <span className="glyphicon form-control-feedback"></span>
            </div>
            
            <div className="form-group has-feedback">
                <label htmlFor="sitetitle" className="control-label">Введите адрес вашего сайта*:</label>
                <input type="text" name="sitetitle" data-name="Введите адрес сайта*" className="form-control" required="required" defaultValue="" minlength="2"
                    maxlength="30"/>
                <input type="hidden" name="formData" defaultValue="Стандартный"/>
                <span className="glyphicon form-control-feedback"></span>
            </div>
           
            <div className="form-group has-feedback">
                <label htmlFor="phone" className="control-label">Введите телефон*:</label>
                <input type="text" name="phone" data-name="Введите телефон*" required="required" className="form-control" defaultValue="" minlength="14"/>
                <span className="glyphicon form-control-feedback"></span>
            </div>
            <button name="send-message" type="submit" className="btn btn-primary pull-right">Отправить сообщение</button>
        </form>
            </div>
        );
    }
}

export default ContactForm1;