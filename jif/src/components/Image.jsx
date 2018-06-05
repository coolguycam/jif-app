import React, { Component } from "react";

class Image extends React.Component {
	render() {
		return(
			<li className="giphy__item"><img src={this.props.src} /></li>
		);
	}
}