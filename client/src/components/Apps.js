import React, { Fragment } from "react";
import RowOne from "./Appetizers/RowOne";
import RowTwo from "./Appetizers/RowTwo";

const Apps = () => {
  return (
    <Fragment>
      <div className="appetizers">
        <p className="appsHeader">Menu</p>
        <RowOne />
        {/* <RowTwo /> */}
      </div>
    </Fragment>
  );
};

export default Apps;
