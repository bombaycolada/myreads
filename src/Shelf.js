import React, {Component} from 'react';
import './vendor/simplegrid/simple-grid.css';

class Shelf extends Component {

	render(){
		return (
			<div className = "container"> 
				<h3> {this.props.title} </h3> 
				
				<div className="row">
					{this.props.booklist.map( (book) => (   
						<div className="col-3"> {book.title} </div>
						))
					}
				</div>

			</div>
			);
	}
	
}

export default Shelf;