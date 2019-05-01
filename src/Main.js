import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents.js';
import DishDetail from './components/DishDetailComponent.js';
import {DISHES} from './shared/dishes.js'
import Header from './components/HeaderComponent.js'
import Footer from './components/FooterComponent.js'
import Home from './components/HomeComponent.js'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES,
      selectedDish:null,
    };
  }

  selectDish(dish) {
    this.setState({
      selectedDish:dish
    })
  }

  render() {
    const HomePage = () => {
      return(
        <Home/>
      );
    }
    return(
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>

      </div>
    )
  }
}

export default Main;
