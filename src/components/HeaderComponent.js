import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {

  render() {

    return(
      <React.Fragment>
        <Navbar dark>
         <div className="container">
          <NavbarBrand href="/">Ristorante Con fusion</NavbarBrand>
         </div>
        </Navbar>

        <Jumbotron>
         <div className="container">
          <div className="row row-header">
           <div className="col-12">
            <h1>Ristorante Con Fusion</h1>
            <p>We can give taste of bliss with our unique fusion of indian and western cusine
            try it once and your taste buds will never forget these lipsmacking dishes</p>
           </div>
          </div>
         </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
