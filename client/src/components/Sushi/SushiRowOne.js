

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SushiRowOne = (props) => {
  return (
    <div className="flexcontainer">

{/* fresh roll card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_LsF2Ojf6SsV0FgWz8xDoPW5uRmXU8K5bSXrQZZMdit89r7L" alt="Card image cap" />
        <CardBody>
          <CardTitle>Spicy Tuna Roll (8pcs)</CardTitle>
          <CardSubtitle>$8.95</CardSubtitle>
          <CardText>Inside: Spicy tuna, tempura flakes Outside: Spicy crab.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* sticky wings card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_0VEs_Vw5VeGATlR4hmCytOOLgM2iIau1oxjAxFTLwYvVeI0fw" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sweet Lady Roll (8pcs)</CardTitle>
          <CardSubtitle>$10.95</CardSubtitle>
          {/* <CardSubtitle className="special">Chef Special*</CardSubtitle> */}

          <CardText>	Inside: Shrimp tempura, avocado. Outside: Spicy crab, tempura flakes.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* gyoza card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://1lach6149z9u3oo5y045p0ax-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Types-of-sushi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dragon Roll (8pcs)</CardTitle>
          <CardSubtitle>$9.95</CardSubtitle>
          <CardText>Inside: Soft shell crab, cucumber, avocado. Outside: Flying fish roe.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card> 
    </div>





  );
};

export default SushiRowOne;