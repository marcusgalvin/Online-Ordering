import React, { Component } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import TheDate from "./OfficialDate/TheDate";

export default class GetReviews extends Component {
  state = {
    allData: [],

  };

  //after all the elements of the page is rendered correctly, this method is called, which calls my api
  componentDidMount() {
    this.getPosts();
  }

  //get request from getallreviews api
  getPosts() {
    axios
      .get("/api/getallreviews")

      .then(res => {
        //res.data is what being grabbed
        const allData = res.data;
        // allData.map(user => ({
        //   name: `${user._id}`
        // }));

        this.setState({
          allData

        });

        //allData is equal to the user input object
        console.log(allData);

      });
  }



  render() {
    const { isLoading, allData } = this.state;

    // console.log(this.state)
    // var allDatas = this.state
    // console.log(allDatas)

    return (
      <div>
        <React.Fragment>
          <h2>List of Reviews:</h2>
          <br />

          {/* <button className="submitButton" onClick={this.sortByRate}>
            TEST
          </button> */}
          <div>
            {!isLoading ? (
              allData.map(post => {
                const {
                  _id,
                  username,
                  starCount,
                  message,
                  date,
                  rating
                } = post;
                return (
                  <div key={_id}>
                    <h2>Name: {username}</h2>
                    <p>Item: {date}</p>
                    <p>Message: {message}</p>

                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={starCount}
                    />

                    <p>{Date()}</p>

                    <hr />
                  </div>
                );
              })
            ) : (
                <p>Loading...</p>
              )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}
