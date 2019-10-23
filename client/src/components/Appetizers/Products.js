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

const Products = ({ id, name, description, img, price, addFunc }) => {
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
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button
            onClick={() =>
              addFunc({ id, name, description, img, price, units: 1 })
            }
          >
            Add
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Products;
