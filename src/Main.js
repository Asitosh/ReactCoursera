import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents.js';
import DishDetail from './components/DishDetailComponent.js';
import {DISHES} from './shared/dishes.js'

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
        <Navbar color='primary'>
          <NavbarBrand href='/'>Ristorante Confusion</NavbarBrand>
        </Navbar>

        <Menu dishes={this.state.dishes} onDishSelect={(dishId)=>{this.selectDish(dishId)}}/>

        <DishDetail selctedForDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>

      </div>
    )
  }
}

export default Main;
