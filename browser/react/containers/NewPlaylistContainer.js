import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			playInput: "",
			hasChanged: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}



	handleChange(event){
		this.setState({
			playInput: event.target.value,
			hasChanged: true
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.addPlaylist(this.state.playInput)
		this.setState({
			playInput: "",
			hasChanged: false 
		})
	}

	render(){
		return (
			<div>
				<NewPlaylist hasChanged = {this.state.hasChanged} val={ this.state.playInput } handleSubmit = { this.handleSubmit } handleChange = { this.handleChange }/>
			</div>
	)}
} 
