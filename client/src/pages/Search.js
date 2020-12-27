import React, { Component } from "react";
import API from "../utils/API";
// import SaveBtn from "../components/SaveBtn";
import SearchRow from '../components/BookRow/SearchRow.js'
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
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
    render() {
        return (
          <Container>
            <Row>
              <Col size="sm-12">
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
                {this.state.results.length ? (
                <div>
                  <SearchRow books={this.state.results}/>
                </div>
                ) : (
                  null
                )}
            </Row>
          </Container>
        );
      }
    }
export default Search;