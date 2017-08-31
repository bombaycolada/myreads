import React, {Component} from 'react';
import Book from './Book.js';

class Shelf extends Component {

	render(){
		return (
			<div className = "container"> 
				<h3> {this.props.title} </h3> 
				<hr/>
				<div className="row">
					{this.props.booklist.map( (book) => (   
						<div key={book.id} className="col-3 book"> 
							<span className="book-shelf-changer" onClick={switchShelf} > 
	                              <select>
	                                <option value="none" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
							</span>
							<Book imageLinks={book.imageLinks} title={book.title} authors={book.authors}/>
							
						</div>

						))
					}
				</div>

			</div>
			);
	}
	
}

function switchShelf(event){
	console.log("change my shelf");
	console.log(event);
}

export default Shelf;