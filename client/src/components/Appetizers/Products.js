import React from "react";
import RowOne from "./RowOne";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function checkState() {
  console.log(this.state)
}

//props of each menu item
const Products = ({ id, name, description, img, price, addFunc, total }) => {
  return (
    <div className="flexcontainer, float">
      <Card className="cards">
        <CardImg
          className="pixles"
          top
          width="100%"
          src={img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description}</CardText>
          {/* on click exucute the addFunc function, but also pass props into this for addFunc to access */}
          <Button
            onClick={() =>
              addFunc({ id, name, description, img, price, units: 1, total })
            }
          >
            Add
          </Button>
          {/* <Button onClick={checkState}></Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Products;
