import React, { Component } from "react";

class ImageList extends Component {
	render() {
		let images = [],
			returnHTML;
		this.props.imageslist.map((item) => {
			let key = item.id.toString(),
				src = item.images.fixed_width.url;

			images.push(<Image key={key} src={src} />);
		});
		if(images.length) {
			returnHTML = <ul className="giphy__list">{images}</ul>;
		} else {
			if(this.props.firstLoad) {
				// Don't show 'No result' in first-load stage
				returnHTML = <div></div>
			} else {
				returnHTML = <div className="error">No result!</div>;
			}
		}
		return(returnHTML);
	}
}