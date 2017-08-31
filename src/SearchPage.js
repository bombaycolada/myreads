import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SearchPage extends Component {

	render(){
		return (
			<div>
				I am a Search Page
				<p><Link to="/">Back to Main Page</Link></p>
			</div>

		)
	}
}

export default SearchPage;