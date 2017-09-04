import React, {Component} from 'react';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';

class Shelf extends Component {
	


	handleClick(e, obj){
		var el = e.target.querySelector("select");
		if (el) el.style.display="inline";
	}

	handleChange(e, book){
		var el = e.target;
		var newShelf = el.value;
		BooksAPI.update(book, newShelf);
		this.props.refresh();
		
		
	}

	render(){
		return (
			<div className = "container"> 
				<h3> {this.props.title} </h3> 
				<hr/>
				<div className="row">
					{this.props.booklist.map( (book) => (   
						<div key={book.id} className="col-3 book"> 
							<span className="book-shelf-changer" onClick={ (e) => this.handleClick(e, book) } > 
	                              <select value={book.shelf} onChange={(e) => this.handleChange(e, book)}>
	                                <option value="moveto" disabled>Move to...</option>
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



export default Shelf;