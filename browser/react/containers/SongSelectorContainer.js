import React, { Component } from 'react';
import SongSelector from '../components/SongSelector';
import axios from 'axios';

export default class SongSelectorContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			selectedValue:"",
			allSongs: [],
			serverError: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			selectedValue: event.target.value,
			serverError: false
		})
	}

	handleSubmit(event){
		event.preventDefault()
		console.log(this.state.selectedValue)
		axios.post(`/api/playlists/${this.props.playlistId}/songs`, { id: this.state.selectedValue})
		.then(res => res.data)
		.then(this.props.addSongToPlaylist)
		.catch(() => this.setState({ serverError: true }));
	}

	componentDidMount(){
	    axios.get(`/api/songs`)
	    .then(res => res.data)
	    .then(allSongs => {
	      this.setState({ allSongs, selectedValue: allSongs[0].id })
	    })
 
 	}

	render(){
		return(
			<SongSelector serverError={this.state.serverError} selectedVal = { this.state.selectedValue } onChange = { this.handleChange } 
			onSubmit = { this.handleSubmit } songs = { this.state.allSongs }/>
			)
	}

}

