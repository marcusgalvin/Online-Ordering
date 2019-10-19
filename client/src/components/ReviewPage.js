import React, { Fragment } from "react";
import Review from "./Review"
import GetReviews from "./GetReviews"


const ReviewPage = () => {
  return (
    <Fragment>
      <div>
      <Review /> 
     <GetReviews />

        </div>
    </Fragment>
  );
};

export default ReviewPage;