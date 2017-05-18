import React, {Component} from 'react';

export default class SongSelector extends Component{

	render(){
		return (
			  <div className="well">
			    <form onSubmit = {this.props.onSubmit} className="form-horizontal" noValidate name="songSelect">
			      <fieldset>
			        <legend>Add to Playlist</legend>
			        <div className="form-group">
			          <label htmlFor="song" className="col-xs-2 control-label">Song</label>
			          <div className="col-xs-10">
			            <select value = {this.props.selectedVal} onChange = {this.props.onChange} className="form-control" name="song">
			            	{ this.props.songs.map( song =>
			            		<option key= { song.id } value= { song.id }>{ song.name }</option>
			            		)}

			            </select>
			          </div>
			        </div>
			        <div className="form-group">
			          <div className="col-xs-10 col-xs-offset-2">
			            <button type="submit" className="btn btn-success">Add Song</button>
			          </div>
			        </div>
			      </fieldset>
			    </form>
		      	{
	          		this.props.serverError
	          		?
	          		<div className ="alert alert-warning">
		          		Song is already in the playlist.
		          	</div> 
		          	: null
	          	}

			  </div>
	)}
}