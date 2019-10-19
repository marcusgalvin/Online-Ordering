import React, { Fragment } from "react";
import SushiRowOne from "./Sushi/SushiRowOne";
import SushiRowTwo from "./Sushi/SushiRowTwo"


const Apps = () => {
  return (
    <Fragment>
      <div>
      <p className="appsHeader">Sushi</p>
      <SushiRowOne />
      <SushiRowTwo />

        </div>
    </Fragment>
  );
};

export default Apps;