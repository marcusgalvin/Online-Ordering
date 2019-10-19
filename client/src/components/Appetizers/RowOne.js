

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RowOne = (props) => {
  return (
    <div className="flexcontainer">

{/* fresh roll card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://whiteonricecouple.com/recipe/images/how-to-roll-spring-rolls-recipes-485-1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fresh Rolls (2)</CardTitle>
          <CardSubtitle>$4.95</CardSubtitle>
          <CardText>Rice paper wrap, shrimp, noodles, lettuce, cucumber, carrots, basil leaves, beansprouts and cilantro.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* sticky wings card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-wide-FS.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sticky Wings</CardTitle>
          <CardSubtitle>$7.95</CardSubtitle>
          <CardSubtitle className="special">Chef Special*</CardSubtitle>

          <CardText>Eight fried chicken wings sautéed in sticky sweet chili sauce.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* gyoza card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="http://www.pbs.org/food/wp-content/blogs.dir/2/files/2015/12/chicken-mushroom-gyoza-1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>House Made Gyoza (6)</CardTitle>
          <CardSubtitle>$5.95</CardSubtitle>
          <CardText>Pork, Egg noodle, chicken, bamboo shoots, water chestnuts and black mushroom, crushed garlic.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card> 
    </div>





  );
};

export default RowOne;