import React, { Component } from "react";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import SavedRow from '../components/BookRow/SavedRow.js'
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";


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
                  <SavedRow books={this.state.books} onClick={e => this.deleteBook(e)}/>
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