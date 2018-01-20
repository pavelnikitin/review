import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MyNavbar from '../components/mynavbar'
import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SEOlanding"
      meta={[
        { name: 'description', content: 'Одностраничный сайт' },
        { name: 'keywords', content: 'Landing page, Продвижение сайта, Портфолио' },
      ]}
    />

    <div>
    <div className="topheader">
     <MyNavbar/>
    </div>
      <div className="row header">
        <div className="col-xs-12 col-sm-6 text-center">
          <div className="review center-block">
            <div className="logo"></div>
            <h4><span className="colorheader">SIB</span>SMO</h4>
            <span>&ensp;&ensp;&ensp;Продвижение сайта</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 text-center">
          <div className="review center-block">
            <div className="logophone"></div>
            <h4><span className="colorheader">+7(555)</span>&ensp;555-55-55</h4>
            <span>&ensp;&ensp;&ensp;Звоните с 9.00 до 21.00</span>
          </div>
        </div>
      </div>

      {children()}
      <div className="copy row text-center ">
        <h5>Copyright © Nikitin Pavel
          <br /> 2018
          <br/> Данные используемые для сайта служат только в целях демонстрации,
          любые совпадения носят случайный характер.

      </h5>
      </div>
    </div>
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
