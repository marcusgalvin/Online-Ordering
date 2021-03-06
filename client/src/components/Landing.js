import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
// import sushi from "./images/sushi.jpg";
// import sushi1.jpg from "./sushi1";
class Landing extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="slider"
            src={require("./images/sushi.jpg")}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          /> */}

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          /> */}

          <Carousel.Caption>
            <div className="lowerSlider">
              <h3>Taste The Difference</h3>
              <p>Asian Inspired, Modern American Resturant</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Landing;
