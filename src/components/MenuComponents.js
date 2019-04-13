import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';


  function RenderMenuItem ({dish, onClick}) {
    return(
      <Card onClick = {()=>onClick(dish.id)}>

      <CardImg object src = {dish.image}></CardImg>

      <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
          <p>{dish.description}</p>
      </CardImgOverlay>

      </Card>
    );
  }
  const Menu = (props)=> {
    const menu = props.dishes.map((dish)=>{
      return(
        <div key = {dish.id} className="col-12 col-md-5 m-1">
         <RenderMenuItem dish={dish} onClick={props.onDishSelect}/>
        </div>
      );
    });
    return (
          <div className="row">
            {menu}
          </div>
        );
  }

export default Menu;
