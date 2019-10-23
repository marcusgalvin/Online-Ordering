import React, { Component } from "react";
import RowOne from "../RowOne";

class AddToCart extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.freshRoll}</p>
      </div>
    );
  }
}

export default AddToCart;
