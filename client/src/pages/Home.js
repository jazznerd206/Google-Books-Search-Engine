import React, { useState, useEffect } from 'react';
import { List, ListItem } from '../components/List';
import API from '../utils/API';


function Home() {

    const [ books, setBooks ] = useState([]);

    const genreArray = [
        'Fantasy', 'Crime', 'Thriller', 'Biography'
    ];

    const getBookData = () => {
        genreArray.forEach(type => {
            API.bookSearch(type).then(res => {
                // console.log(res.data.items)
                setBooks(books => [...books, res.data.items])
            }).catch(err => console.log(err))
        })
    }
    useEffect(() => {
        getBookData();
    }, [])

    console.log(books[0])

    return (
        <List>
            {books.map(book => (
                <ListItem key={book.id}>
                    {book[7].volumeInfo.title}
                </ListItem>
            ))}
        </List>
    )
}

export default Home;
