import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fotogallery"
      meta={[
        { name: 'description', content: 'Отзывы' },
        { name: 'keywords', content: 'Отзывы' },
      ]}
    />
   
    <div id= "wrapper" className="container-fluid">
      <div className="row header">
        <div className="col-xs-12 col-sm-6 text-center">
          <div className="review center-block">
            <div className="logo"></div>
            <h3><span className="colorheader">Отзывы</span>&ensp;на заказ</h3>
            <span>&ensp;&ensp;&ensp;Отзывы от вашей аудитории</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <div className="review center-block">
            <div className="logophone"></div>
            <h3><span className="colorheader">+7(929)</span>&ensp;165-91-29</h3>
            <span>&ensp;&ensp;&ensp;Звоните с 9.00 до 21.00</span>
          </div>
        </div>
      </div>

      {children()}
      <div className="row">
        <div className="footer col-xs-12 text-center">
          <h3></h3>
        </div>
      </div>
    </div>
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
