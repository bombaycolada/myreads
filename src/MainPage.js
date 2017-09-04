import React, { Component } from 'react';
import './Book.css';
import Shelf from './Shelf.js';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {books: {read: [] , currentlyReading: [], wantToRead: []} };
        this.handler = this.handler.bind(this); 
    }

    handler(){
        BooksAPI.getAll().then( (booklist)=> {
            this.setState({ 
                books: {
                    read: booklist.filter( book => book.shelf === 'read'),
                    wantToRead: booklist.filter( book => book.shelf === 'wantToRead'),
                    currentlyReading: booklist.filter( book => book.shelf === 'currentlyReading')
                } 
            })
        } )
    }

    componentDidMount() {
        BooksAPI.getAll().then( (booklist)=> {
            this.setState({ 
                books: {
                    read: booklist.filter( book => book.shelf === 'read'),
                    wantToRead: booklist.filter( book => book.shelf === 'wantToRead'),
                    currentlyReading: booklist.filter( book => book.shelf === 'currentlyReading')
                } 
            })
        } )
    }

	render() {
		return ( 
				<div className="App">
				    <p><Link to="/search">Go To Search</Link></p>
              		<div className="App-header">
                		<h2>My Reads</h2>
              		</div>
            		<Shelf refresh={this.handler} title="Currently Reading" booklist={this.state.books.currentlyReading} />
            		<Shelf refresh={this.handler} title="Want to Read" booklist={this.state.books.wantToRead} />
            		<Shelf refresh={this.handler} title="Read" booklist={this.state.books.read} />
            	</div>
               )
	}
}

export default MainPage;