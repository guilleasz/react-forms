import React, { Component } from "react";
import Songs from "./Songs";
import SongSelectorContainer from "../containers/SongSelectorContainer";

export default class singlePlaylist extends Component{

	componentDidMount(){
		this.props.fetchPlaylist(this.props.params.id)
	}

	componentWillReceiveProps(nextProps){
		if(this.props.params.id !== nextProps.params.id){
			this.props.fetchPlaylist(nextProps.params.id)
		}
	}

	render(){
		const playlist = this.props.selectedPlaylist
		console.log(playlist)
		return(
				<div>
				  <h3>{ playlist.name }</h3>
				  <Songs currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne}songs={playlist.songs } /> {/** Hooray for reusability! */}
				  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
				  <hr />
				  <SongSelectorContainer playlistId = {this.props.params.id} addSongToPlaylist={this.props.addSongToPlaylist} />
				</div>
			
		)
	}

}

