import React from "react";
import Slider from "react-slick";


class Landing extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1111111</h3>
        </div>
        <div>
          <h3>22222222</h3>
        </div>
        <div>
          <h3>333333333</h3>
        </div>
        <div>
          <h3>4444444</h3>
        </div>
        <div>
          <h3>55555555</h3>
        </div>
        <div>
          <h3>66666666669</h3>
        </div>
      </Slider>
    );
  }
}
export default Landing;