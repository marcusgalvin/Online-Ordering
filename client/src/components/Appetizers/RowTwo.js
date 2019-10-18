

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Rangoos = (props) => {
  return (
    <div className="flexcontainer">

{/* crab rangoon card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/ec459e2e-bd90-48b5-ba68-92c47c7afbb6/4c511dee-e6a0-4931-9675-093462e23baa/640x360/match/image.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Crab Rangoons</CardTitle>
          <CardSubtitle>$6.95</CardSubtitle>
          <CardText>Six rangoons filled with cream cheese, crabmeat, green onion and cilantro.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* wanton soup card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://stripedspatula.com/wp-content/uploads/2019/01/wonton-soup-recipe-10-500x500.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fresh Wanton Soup</CardTitle>
          <CardSubtitle>$2.95</CardSubtitle>
          <CardText>Warm soup filled with Wantons stuffed with Spicy Pork and scallions.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>



      {/* salad card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://kitchenconfidante.com/wp-content/uploads/2013/05/Seared-Ahi-Tuna-Salad-Kitchen-Confidante-5-EDIT-620x580.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Seared Tuna Salad</CardTitle>
          <CardSubtitle>$9.95</CardSubtitle>
          <CardText>Seared Atlantic tuna over a bead of fresh greens, topped with ginger dressing.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Rangoos;