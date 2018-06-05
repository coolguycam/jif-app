const GIPHY = {
	base_url: "https://api.giphy.com/v1/gifs/",
	query: ["search", "trending", "random", "translate"],
	api_key: "dc6zaTOxFJmzC",
	limit: 20,
	offset: 0
}
let url = `${GIPHY.base_url}${GIPHY.query[0]}?api_key=${GIPHY.api_key}&limit=${GIPHY.limit}&offset=${GIPHY.offset}`;
let firstInput = 'barakamon';

class Giphy extends React.Component {
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
		let requestURL = `${this.props.url}&q=${keyword}`;
		// Ajax
		const xhr = new XMLHttpRequest();
		xhr.open('GET', requestURL);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if(xhr.status === 200) {
				let response = JSON.parse(xhr.responseText).data;
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
			<div className="giphy__container">
				<InputKeyword firstInput={this.props.firstInput} onKeywordChange={this.handleKeywordChange} />
				<ImageList imageslist={this.state.data} firstLoad={this.state.firstLoad} />
			</div>
		);
	}
}

const GIPHY = {
	base_url: "https://api.giphy.com/v1/gifs/",
	query: ["search", "trending", "random", "translate"],
	api_key: "dc6zaTOxFJmzC",
	limit: 20,
	offset: 0
}
let url = `${GIPHY.base_url}${GIPHY.query[0]}?api_key=${GIPHY.api_key}&limit=${GIPHY.limit}&offset=${GIPHY.offset}`;
let firstInput = 'barakamon';
