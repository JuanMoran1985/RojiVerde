import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Media,
} from 'react-md';


var imagen = 'https://i.pinimg.com/originals/79/6e/da/796eda7a00c60e2c7a09a0601ade3263.jpg';


const WithMedia = (props) => (
  <div className="md-grid">
    <Card className="card md-cell md-cell--6 md-cell--8-tablet">
      <Media>
        <img src={imagen} alt="Nature from lorempixel" />
      </Media>
      <CardTitle title="San Francisco"/>
      <CardTitle title="$12.000"/>
      <Button raised>Hello, World!</Button>
    </Card>
  </div>
);
export default WithMedia;