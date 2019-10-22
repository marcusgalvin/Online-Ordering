import React, { Fragment } from "react";
import TheRealDate from "./imbeddedDate/TheRealDate";

const TheDate = props => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

export default TheDate;
