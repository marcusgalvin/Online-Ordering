import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SushiRowTne = (props) => {
  return (
    <div className="flexcontainer">

{/* fresh roll card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://images.squarespace-cdn.com/content/v1/5c055d6812b13fc1f4724a86/1554428720542-DGAP0DTN7WL376VPRM6V/ke17ZwdGBToddI8pDm48kEM4UpPodDvj_xenBgrfaqZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcpyDP3bltU5LGLjjKdLWzKo6J-QatHBlsmL0kLGhB8sDd0XdrpHeLWS7YYzpHs1IQ/IMG_2485%2BA.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Spicy Jalopeno Roll (10 pcs)</CardTitle>
          <CardSubtitle>$12.95</CardSubtitle>
          <CardText>Super white tuna, yellowtail, avocado, & jalapeno, with yuzu chili sauce.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* sticky wings card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F73472721%2F241283988187%2F1%2Foriginal.20190919-025307?w=1000&auto=compress&rect=0%2C0%2C2160%2C1080&s=2985b014d6e71d7775b2a3e51dd091d4" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fantasy Roll (8pcs)</CardTitle>
          <CardSubtitle>$11.95</CardSubtitle>
          {/* <CardSubtitle className="special">Chef Special*</CardSubtitle> */}

          <CardText>(Tempura Style) Inside: White fish, scallion. Outside: Served with sauce.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>

{/* gyoza card */}

      <Card className="cards">
        <CardImg top width="100%" className="pixles" src="https://okdiario.com/img/2018/12/26/receta-de-sashimi-de-atun-1-655x368.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Salmon Sashimi (6 pcs)</CardTitle>
          <CardSubtitle>$9.95</CardSubtitle>
          <CardText>Fresh salmon sashimi with wasabi and soy dipping sauce.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card> 
    </div>





  );
};

export default SushiRowTne;