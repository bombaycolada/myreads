import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf.js';
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booklist: [],
            bookshelf: {}
        }; 
        this.handler = this.handler.bind(this); 
        this.handleInput = this.handleInput.bind(this);      
    }

    handleInput(source){
        var input = document.getElementById("searchQuery").value;
        BooksAPI.search(input, 20).then( (booklist)=> {
            if (booklist.length >0){
                for (var i=0; i<booklist.length; i++){
                    if (this.state.bookshelf[booklist[i].id]){
                        booklist[i].shelf = this.state.bookshelf[booklist[i].id];
                    }
                    else{
                        booklist[i].shelf = "none";
                    }
                }
                this.setState({ 
                    booklist : booklist
                })  
            }
        })
    }

    
    handler(){
        this.componentDidMount();
        var input = document.getElementById("searchQuery").value;
        BooksAPI.search(input, 10).then( (booklist)=> {
            for (var i=0; i<booklist.length; i++){
                if (this.state.bookshelf[booklist[i].id]){
                    booklist[i].shelf = this.state.bookshelf[booklist[i].id];
                }
                else{
                    booklist[i].shelf = "none";
                }
            }
            this.setState({ 
                booklist : booklist
            })  
        }) 
    }

    componentDidMount() {
        BooksAPI.getAll().then( (booklist)=> {
            var bookshelf = {}
            for( var i=0; i<booklist.length; i++){
                bookshelf[booklist[i].id] = booklist[i].shelf;
            }
            this.setState({ 
                bookshelf : bookshelf
            })  
        })


    }

	render(){
		return (
			<div className="App">
				
				<p><Link to="/">Back to Main Page</Link></p>
				<h3><input id="searchQuery" type="text" placeholder="Search Book" /> <button onClick={this.handleInput}>Search</button> </h3>
			     <Shelf refresh={this.handler} title="" booklist={this.state.booklist} />
			</div>

		)
	}
}

export default SearchPage;