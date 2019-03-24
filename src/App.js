import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './Main.js'

class App extends Component {



  render() {
    return (
        <div className="App">
          <Main/>
        </div>

    );
  }
}

export default App;
