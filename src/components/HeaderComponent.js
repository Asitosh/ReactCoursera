import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,  Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen:false
    };

  }

  toggleNav() {
    this.setState({isNavOpen:!this.state.isNavOpen});
  }

  render() {

    return(
      <div>
        <Navbar dark expand="md">
         <div className="container">
         <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand href="/">Ristorante Con fusion</NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
            <NavItem>
              <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="aboutus" className="nav-link"><span className="fa fa-info fa-lg"></span>About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/menu" className="nav-link"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contactus" className="nav-link"><span className="fa fa-address-card fa-lg"></span>Contact us</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
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
      </div>
    );
  }
}

export default Header;
