import React, { useState, useEffect } from 'react';
import { List, ListItem } from '../components/List';
import API from '../utils/API';


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
        <div className="flex-row">
            <div className="flex-col">
                <h2>C</h2>
                <h2>R</h2>
                <h2>I</h2>
                <h2>M</h2>
                <h2>E</h2>
            </div>
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
        </div>
        <div className="flex-row">
            <div className="flex-col">
                <h2>F</h2>
                <h2>A</h2>
                <h2>N</h2>
                <h2>T</h2>
                <h2>A</h2>
            </div>
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
        </div>
        <div className="flex-row">
            <div className="flex-col">
                <h2>T</h2>
                <h2>H</h2>
                <h2>R</h2>
                <h2>I</h2>
                <h2>L</h2>
            </div>
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
        </div>
        <div className="flex-row">
            <div className="flex-col">
                <h2>C</h2>
                <h2>H</h2>
                <h2>I</h2>
                <h2>L</h2>
                <h2>D</h2>
            </div>
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
        </div>
    </div>
    )
}

export default Home;
