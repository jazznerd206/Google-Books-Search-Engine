import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import SavedRow from '../components/BookRow/SavedRow.js'
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {

    state = {
        books: [],
        bookTitle: "",
        results: [],
        title: "",
        author: "",
        description: "",    
        bookData: {}
    }

    componentDidMount() {
        this.checkForSavedBooks();
      };

    componentDidUpdate() {
        this.checkForSavedBooks();
    }

     checkForSavedBooks = books => {
        API.getBooks().then(res => {
            this.setState({books:res.data});
        }).catch(err => console.log(err));
    }

    deleteBook = id => {
      console.log(id)
      API.deleteBook(id)
    }
    


    render() {
        return (
          <Container>
            <Row>
              <Col size="sm-12">
                {this.state.books.length ? (
                <div>
                  <SavedRow books={this.state.books} />
                <List>
                    {this.state.books.map((book) => (
                      
                    <ListItem key={book._id}>
                        <div className="cover-image">
                          <img src={book.image} alt={book.title}></img>
                        </div>
                        <div className="book-title">
                          {book.title}
                        </div>
                        <div className="book-author">
                          {book.author}
                        </div>
                        <div className="book-summmary">
                          {book.description}
                        </div>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                    ))}
                </List>
                </div>
                ) : (
                  <div className="no-results">
                    <h3>No books saved yet.</h3>
                  </div>
                )}
            </Col>

            </Row>
          </Container>
        );
      }
    }



export default Saved;