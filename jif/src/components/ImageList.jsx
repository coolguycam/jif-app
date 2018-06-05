import React, { Component } from "react";
import Image from "./Image";


class ImageList extends Component {
	render() {
		let images = [],
			returnHTML;
		this.props.imageslist.map((item) => {
			let key = item.id.toString(),
				src = item.images.fixed_width.url,
				alt = item.title.toString();

			images.push(<Image key={key} src={src} alt={alt} />);
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

export default ImageList;