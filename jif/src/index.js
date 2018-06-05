import React from "react";
import ReactDOM from "react-dom";
import Giphy from "./components/Giphy";
import registerServiceWorker from './registerServiceWorker';
import "./index.css"

const GIPHY = {
	base_url: "https://api.giphy.com/v1/gifs/",
	query: ["search", "trending", "random", "translate"],
	api_key: "dc6zaTOxFJmzC",
	limit: 20,
	offset: 0
}
let url = `${GIPHY.base_url}${GIPHY.query[0]}?api_key=${GIPHY.api_key}&limit=${GIPHY.limit}&offset=${GIPHY.offset}`;
let firstInput = 'russell';

ReactDOM.render(
	<Giphy url={url} firstInput={firstInput} />,
	document.getElementById('root')
);
registerServiceWorker();
