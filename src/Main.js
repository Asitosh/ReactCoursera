import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents.js';
import DishDetail from './components/DishDetailComponent.js';
import {DISHES} from './shared/dishes.js'
import Header from './components/HeaderComponent.js'
import Footer from './components/FooterComponent.js'

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
    return(
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onDishSelect={(dishId)=>{this.selectDish(dishId)}}/>

        <DishDetail selctedForDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>

      </div>
    )
  }
}

export default Main;
