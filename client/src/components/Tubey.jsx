import React, { Component } from "react";
import ImageList from "./ImageList";
import InputKeyword from "./InputKeyword";

class Tubey extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			firstLoad: true
		}
		this.handleKeywordChange = this.handleKeywordChange.bind(this);
		this.createAjax = this.createAjax.bind(this);
	}
	createAjax(keyword, firstLoad) {
		let self = this;
		keyword = encodeURI(keyword);
		let requestURL = `${this.props.url}`;
		// Ajax
		const xhr = new XMLHttpRequest();
		xhr.open('GET', requestURL);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if(xhr.status === 200) {
                let response = JSON.parse(xhr.responseText).data;
                console.log(response);
				self.setState({
					data: response,
					firstLoad: firstLoad
				});
			} else {
				console.log('Request failed.  Returned status of ' + xhr.status);
			}
		}
		xhr.send();
	}
	handleKeywordChange(keyword) {
		this.createAjax(keyword, false);
	}
	componentDidMount() {
		this.createAjax(this.props.firstInput, true);
	}
	render() {
		return(
			<div className="tubey__container">
				<InputKeyword firstInput={this.props.firstInput} onKeywordChange={this.handleKeywordChange} />
				<ImageList imageslist={this.state.data} firstLoad={this.state.firstLoad} />
			</div>
		);
	}
}
export default Tubey;