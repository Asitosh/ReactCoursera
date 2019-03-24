import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';
import DishDetail from './DishDetailComponent.js'

class Menu extends Component {



  render() {
    const menu = this.props.dishes.map((dish)=>{
      return(
        <div key = {dish.id} className="col-12 col-md-5 m-1">
        <Card onClick = {()=>this.props.onDishSelect(dish.id)}>

        <CardImg object src = {dish.image}></CardImg>

        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            <p>{dish.description}</p>
        </CardImgOverlay>

        </Card>
        </div>
      );
    });
    return (
          <div className="row">
            {menu}
          </div>
        );
  }
}
export default Menu;
