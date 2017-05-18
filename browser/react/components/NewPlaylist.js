import React from 'react';

export default function PlayList(props){
	return (
		<div className="well">
		  <form className="form-horizontal"
		  	onSubmit = { props.handleSubmit }
		  >
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input className="form-control" type="text"
		          onChange = { props.handleChange }
		          value = { props.val }
		          />
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button type="submit" className="btn btn-success"
		          	disabled={!props.val || props.val.length > 16}
		          >Create Playlist</button>
		          	{
		          		props.hasChanged && !props.val 
		          		?
		          		<div className ="alert alert-warning">
			          		Please enter a name!
			          	</div> 
			          	: null
		          	}
		          	{
		          		props.hasChanged && props.val.length > 16
		          		?
		          		<div className ="alert alert-warning">
		          			Please enter a shorter name (Should be less than 16 characters)!
		          		</div>
		          		: null
		          	}
		          
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
)}