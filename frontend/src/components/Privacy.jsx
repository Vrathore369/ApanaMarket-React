import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <h3>Privacy Policy</h3>
          <hr />
          <p>
            We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how ApnaMarket Internet Private Limited and its affiliates (collectively “ApnaMarket, we, our, us”) collect, use, share or otherwise process your personal information through ApnaMarket website <Link to="/">www.ApnaMarket.com</Link>, its mobile application, and m-site (hereinafter referred to as the “Platform”).
          </p>
          <p>
            While you may be able to browse certain sections of the Platform without registering with us, however, please note we do not offer any product or service under this Platform outside India. Your personal information will primarily be stored and processed in India and may have data protection laws that are different from those that apply in the country in which you are located. By visiting this Platform, providing your information or availing our product/service, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
