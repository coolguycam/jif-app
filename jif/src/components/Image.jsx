import React, { Component } from "react";

class Image extends Component {
	render() {
		return(
			<ul className="giphy__item"><img src={this.props.src} alt={this.props.alt} /></ul>
		);
	}
}

export default Image;