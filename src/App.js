import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './Main.js'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
