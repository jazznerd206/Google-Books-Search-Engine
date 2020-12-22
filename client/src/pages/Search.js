import React, { Component } from "react";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
import SearchRow from '../components/BookRow/SearchRow.js'
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import './styles.css';


class Search extends Component {

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
        //console.log('mounted');
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

            //console.log(res.data.items);

            this.setState({
            results: res.data.items
            });
        })
        .catch(err => console.log(err));
        }
        //console.log(this.state.results)
    };
    // saveBook = book => {
    //     API.saveBook(book)
    //     .then(res => {
    //         // const bookSet = this.state.results;
    //         // console.log(bookSet);
    //         // console.log(book.link);
    //         // +++++++++++++++++++++++++++
    //         // remove saved book from list
    //         // +++++++++++++++++++++++++++
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err));
    // };
    render() {
        return (
          <Container>
            <Row>
              <Col size="sm-12">
                {/* <Jumbotron>
                  <h1>Book your next adventure!!</h1>
                </Jumbotron> */}
                <form>
                  <Input
                    value={this.state.bookTitle}
                    onChange={this.handleInputChange}
                    name="bookTitle"
                    placeholder="Search"
                  />
                  <FormBtn
                    onClick={this.bookFind}
                  >
                    Find A Book
                  </FormBtn>
                </form>
              </Col>
              </Row>
              <Row>
              {/* <Col size="sm-12"> */}
                {this.state.results.length ? (
                <div>
                <SearchRow books={this.state.results}/>
                {/* <List>
                    {this.state.results.map((book, index) => (
                    <ListItem key={book.id}>
                        <div className="cover-image">
                          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}></img>
                        </div>
                        <div className="book-title">
                          {book.volumeInfo.title}
                        </div>
                        <div className="book-author">
                          {book.volumeInfo.authors[0]}
                        </div>
                        <div className="book-summmary">
                          {book.volumeInfo.description}
                        </div>
                        <div className="book-btn-div">
                          <SaveBtn
                              key={"" + index + book.id}
                              disabled={book.volumeInfo.infoLink === "/"}
                              onClick={() => this.saveBook({
                              title: book.volumeInfo.title,
                              author: book.volumeInfo.authors[0],
                              description: book.volumeInfo.description,
                              image: book.volumeInfo.imageLinks.smallThumbnail,
                              link: book.volumeInfo.infoLink,
                              _id: book.id
                              })}
                          >
                              Save Book
                          </SaveBtn>
                        </div>
                    </ListItem>
                    ))}
                </List> */}
                </div>
                ) : (
                  null
                  // <div className="no-results">
                  //   <h3>Results here</h3>
                  // </div>
                )}
            {/* </Col> */}
            </Row>
          </Container>
        );
      }
    }
export default Search;