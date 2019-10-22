import React, { Fragment } from "react";
import TheDate from "../TheDate";

class TheRealDate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <TheDate date={Date()} />
      </div>
    );
  }
}

export default TheRealDate;
