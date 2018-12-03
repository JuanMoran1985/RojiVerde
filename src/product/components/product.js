import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Media,
} from 'react-md';


var imagen = 'https://i.pinimg.com/originals/79/6e/da/796eda7a00c60e2c7a09a0601ade3263.jpg';


const Product = (props) => (
  <div className="md-grid">
    <Card className="card md-cell md-cell--6 md-cell--8-tablet">
      <Media>
        <img 
        src={imagen} 
        alt={this.props.product_alternative} 
        width={244}
        heigth={170}
        />
      </Media>
      <CardTitle title={this.props.product_title}/>
      <CardTitle title={this.props.product_price}/>
      <Button raised>AGREGAR AL CARRO</Button>
    </Card>
  </div>
);
export default Product;