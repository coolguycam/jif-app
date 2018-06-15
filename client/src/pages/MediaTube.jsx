import React, { Component } from "react";
import Tubey from "../components/Tubey";
import Nav from "../components/Nav";

const GIPHY = {
  base_url: "https://www.googleapis.com/youtube/v3/",
  query: ["search", "trending", "random", "translate"],
  api_key: "AIzaSyD89ubeGMxQmASCI8Om4vRXbjRu0fm9sAs",
  limit: 20,
  offset: 0
};
let firstInput = "russell westbrook highlights";
let url = `${GIPHY.base_url}${
  GIPHY.query[0]
}?part=snippet&q=${firstInput}&maxResults=${GIPHY.limit}api_key=${
  GIPHY.api_key
}`;

class Media extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Tubey url={url} firstInput={firstInput} />
      </div>
    );
  }
}

export default Media;
