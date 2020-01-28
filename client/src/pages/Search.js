import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Axios from "axios";

class Search extends Component {

    state = {
        bookTitle: "",
        results: [],
        title: "",
        author: "",
        description: "",    
        sent: false
    }
    componentDidMount() {
        console.log('mounted');
      };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    bookFind = event => {
    event.preventDefault();
    if (this.state.bookTitle) {

        const title = this.state.bookTitle.trim();

        API.bookSearch(title)
        .then(res => {

            console.log(res.data.items);

            this.setState({
            sent: true,
            results: res.data.items
            });
        })
        .catch(err => console.log(err));
        }
    };
    render() {
        return (
          <Container>
            <Row>
              <Col size="sm-12">
                <Jumbotron>
                  <h1>Book your next adventure!!</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.bookTitle}
                    onChange={this.handleInputChange}
                    name="bookTitle"
                    placeholder="api-query"
                  />
                  <FormBtn
                    onClick={this.bookFind}
                  >
                    Search GoogleBooks
                  </FormBtn>
                </form>
              </Col>
              <Col size="sm-12">
                {this.state.results.length ? (
                <List>
                    {this.state.results.map(book => (
                    <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                        <strong>
                            {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                        </strong>
                        {book.volumeInfo.subtitle}
                        </Link>
                    </ListItem>
                    ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
                )}
            </Col>
            </Row>
          </Container>
        );
      }
    }
export default Search;