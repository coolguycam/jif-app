import React, { Component } from "react";
import Giphy from "../components/Giphy";
import Nav from "../components/Nav";

const GIPHY = {
  base_url: "https://api.giphy.com/v1/gifs/",
  query: ["search", "trending", "random", "translate"],
  api_key: "dc6zaTOxFJmzC",
  limit: 20,
  offset: 0
};
let url = `${GIPHY.base_url}${GIPHY.query[0]}?api_key=${GIPHY.api_key}&limit=${
  GIPHY.limit
}&offset=${GIPHY.offset}`;
let firstInput = "russell";

class Media extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Giphy url={url} firstInput={firstInput} />
      </div>
    );
  }
}

export default Media;
