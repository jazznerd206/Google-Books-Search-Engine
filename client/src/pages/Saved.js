import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Axios from "axios";

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
        console.log('mounted');
        this.checkForSavedBooks();
      };

      checkForSavedBooks = books => {
        API.getBooks().then(res => {
            this.setState({books:res.data});
        }).catch(err => console.log(err));
    }

    deleteBook = id => {
        console.log(id)

    };
    


    render() {
        return (
          <Container>
            <Row>
              <Col size="sm-12">
                <Jumbotron>
                  <h1>Saved Books</h1>
                </Jumbotron>
              </Col>
              <Col size="sm-12">
                {this.state.books.length ? (
                <List>
                    {this.state.books.map((book) => (
                    <ListItem key={book.id}>
                        {/* <img src={book.image}></img> */}
                        <strong>
                            {book.title} by {book.author}
                        </strong>
                        {book.description}
                        <DeleteBtn onClick={() => this.deleteBook(book.id)} />
                    </ListItem>
                    ))}
                </List>
                ) : (
                <h3>No books saved yet</h3>
                )}
            </Col>

            </Row>
          </Container>
        );
      }
    }
export default Saved;