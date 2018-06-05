import React, { Component } from "react";

class InputKeyword extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	_debounce(func, wait, immediate) {
		let timeout;
		return function() {
			let context = this,
				args = arguments;
			let callNow = immediate && !timeout;
			let _delay = function() {
				timeout = null;
				if(!immediate) {
					func.apply(context, args);
				}
			}
			clearTimeout(timeout);
			timeout = setTimeout(_delay, wait);
			if(callNow) func.apply(context, args);
		}
	}
	handleChange() {
		this.props.onKeywordChange(this.searchKeyword.value);
	}
	render() {
		return(
			<div className="giphy__input">
				<input
					type="text"
					placeholder="russell..."
					ref={(ref) => this.searchKeyword = ref}
					onChange={this._debounce(this.handleChange, 800, false)}
				/>
			</div>
		)
	}
}

export default InputKeyword;