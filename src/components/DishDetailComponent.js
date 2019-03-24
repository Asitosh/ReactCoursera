import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component {
  constructor (props){
    super(props);
  }
  render(){
    if (null!=this.props.selctedForDish) {
      const dishComments = this.props.selctedForDish.comments.map((comment)=>{
        return(
          <div key={comment.id}>
            <div>{comment.comment}</div>
            <div>-- {comment.author}, {comment.date}</div>
          </div>
        );
      });
      return(
        <div className="row">
        <div className = "col-12 col-md-5 m-1">
        <Card>
        <CardImg top src={this.props.selctedForDish.image} alt={this.props.selctedForDish.name} />
            <CardBody>
              <CardTitle>{this.props.selctedForDish.name}</CardTitle>
              <CardText>{this.props.selctedForDish.description}</CardText>
            </CardBody>
        </Card>
        </div>
        <div  className = "col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {dishComments}
        </div>
        </div>
      );
    } else{
      return(
        <div></div>
      );
    }
  }
}
export default DishDetail
