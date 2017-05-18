import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {
	constructor(props){
		super(props);
		this.state = { 
			inputValue : '',
		};
		this.collectValue = this.collectValue.bind(this);
	}

	// componentWillReceiveProps(nextProps){
	// 	if(this.props.artists.length !== nextProps.artists.length){
	// 		this.setState({
	// 			filterArtists: nextProps.artists
	// 		})
	// 	}
	// }

	collectValue(event){
		this.setState({
			inputValue : event.target.value
		})
	}

	render(){
		return(
			<div>
				<FilterInput inputValue = {this.state.inputValue} collectValue = { this.collectValue } />
				<Artists artists = { this.props.artists.filter(artist => artist.name.match(this.state.inputValue))} />
			</div>
			

	)}

}