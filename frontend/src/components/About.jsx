import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../images/ba.jpg'

const About = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <h3>About Us</h3>
          <hr />
          <div className="about__container container grid">
            <div className="about__data row">
              <div className="about__img col-md-4 d-flex">
                <div className="about__img-overlay">
                  <img src={bg} height="150px" alt="" className="about__img-one" />
                </div>
              </div>
              <div className="col-md-8">
                <p className="section__title about__title">Naveen Chaudhary</p>
                <p className="about__description">Founder &amp; Designer of ApnaMarket.com</p>
                <div className="c__social ">
                  <Link to="https://www.facebook.com/King143nd" target="_blank" className="al-fb" data-sr-id={40} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-facebook-box-fill" />
                  </Link>
                  <Link to="https://instagram.com/naveen.chaudhary13" target="_blank" className="al-ig" data-sr-id={41} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-instagram-fill" />
                  </Link>
                  <Link to="https://twitter.com/kingndnaveen" target="_blank" className="al-tw" data-sr-id={42} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-twitter-fill" />
                  </Link>
                  <Link to="https://wa.me/+917999898702" target="_blank" className="al-wp" data-sr-id={43} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-whatsapp-fill" />
                  </Link>
                  <Link to="tel:+917999898702" target="_blank" className="al-pn" data-sr-id={44} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-phone-fill" />
                  </Link>
                  <Link to="mailto:nvnaveenchaudhary@gmail.com" target="_blank" className="al-em" data-sr-id={45} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                    <i className="ri-mail-line" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3">
            Started in 2023, ApnaMarket has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 450 million, ApnaMarket's marketplace offers over 150 million products across 80+ categories. Today, there are over 11 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation, ApnaMarket has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs. ApnaMarket is known for pioneering services such as Cash on Delivery, No Cost EMI, and easy returns, which are customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
