import React, { useState, useEffect } from 'react';
import { List, ListItem } from '../components/List';
import API from '../utils/API';
import { Fade } from 'react-reveal';


function Home() {

    const [ books, setBooks ] = useState([]);

    const genreArray = [
        'crime', 'fantasy', 'biography', 'childrens', 'thriller'
    ];

    const getBookData = () => {
        genreArray.forEach(type => {
            API.bookGenreSearch(type).then(res => {
                res.data.docs.forEach(volume => {
                    if (volume.cover_edition_key) {
                        setBooks(books => [...books, volume])
                    }  
                })
            }).catch(err => console.log(err))
        })
    }
    useEffect(() => {
        getBookData();
    }, [])

    const selectBook = event => {
        event.preventDefault();
        console.log(event.target.alt)
        return (
            <div>{event.target.alt}</div>
        )
    }

    console.log(books)

    return (
    <div>
        <div className="flex-col">
            <Fade>
                <div className="genre-titles">
                    <h1>Crime</h1>    
                </div>
            </Fade>
            
            <Fade bottom cascade>
                <ul className="book-row">
                    {books.filter(book => book.subject.includes('Crime')).map((book, index) => {
                        return (
                            <div 
                                key={book.cover_edition_key}
                                className="book-cover"
                            >
                                <img 
                                    src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`} 
                                    alt={book.cover_edition_key}
                                    onClick={selectBook}
                                />
                            </div>
                        )
                    })}
                    {console.log(books.filter(book => book.subject.includes('Crime')))}
                </ul>
            </Fade>
        </div>
        <div className="flex-col">
            <Fade>
                <div className="genre-titles">
                    <h1>Biography</h1>    
                </div>
            </Fade>
            <Fade bottom cascade>
                <ul className="book-row">
                    {books.filter(book => book.subject.includes('Biography')).map((book, index) => {
                        return (
                            <div 
                                key={book.cover_edition_key}
                                className="book-cover"
                            >
                                <img 
                                    src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`} 
                                    alt={book.cover_edition_key}
                                    onClick={selectBook}
                                />
                            </div>
                        )
                    })}
                    {console.log(books.filter(book => book.subject.includes('Crime')))}
                </ul>
            </Fade>
        </div>
        <div className="flex-col">
            <Fade>
                <div className="genre-titles">
                    <h1>Thriller</h1>    
                </div>
            </Fade>
            <Fade bottom cascade>
            <ul className="book-row">
                {books.filter(book => book.subject.includes('Thriller')).map((book, index) => {
                    return (
                        <div 
                            key={book.cover_edition_key}
                            className="book-cover"
                        >
                            <img 
                                src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`} 
                                alt={book.cover_edition_key}
                                onClick={selectBook}
                            />
                        </div>
                    )
                })}
            </ul>
            </Fade>
        </div>
        <div className="flex-col">
            <Fade>
                <div className="genre-titles">
                    <h1>Childrens</h1>    
                </div>
            </Fade>
            <Fade bottom cascade>
            <ul className="book-row">
                {books.filter(book => book.subject.includes('Children')).map((book, index) => {
                    return (
                        <div 
                            key={book.cover_edition_key}
                            className="book-cover"
                        >
                            <img 
                                src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`} 
                                alt={book.cover_edition_key}
                                onClick={selectBook}
                            />
                        </div>
                    )
                })}
            </ul>
            </Fade>
        </div>
    </div>
    )
}

export default Home;
