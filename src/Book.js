import React, {Component} from 'react';

class Book extends Component {

	render(){
		return (
			<span>
				<img className="img" src={this.props.imageLinks.smallThumbnail} alt={this.props.title}/>
				<div className="content">
					<span className="title">{this.props.title} </span>
					<span className="author">{this.props.authors.toString()} </span>
				</div>
							
			</span>
			);
	}	

}

export default Book;