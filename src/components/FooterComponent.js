import React, {Component} from 'react';

function Footer(props){

  return(
    <div className="footer">
      <div className="container">
        <div className="row justify-cener">
          <div className="col-4 col-sm-6">
            <h1>Links</h1>
            <ul className="unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Contact us</a></li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <address>
              121 Magarpatta,<br/>
              DC Pune<br/>
              <i className="fa fa-phone fa-lg"></i>+49 15211455868<br/>
              <i className="fa fa-fax fa-lg"></i>+49 15211455868<br/>
              <i className="fa fa-envelope fa-lg"></i><a href="mailto:confusion@confusion.net">confusion@confusion.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-facebook" href="http://fb.com">
              <i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com">
              <i className="fa fa-linkedin"></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com">
              <i className="fa fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
