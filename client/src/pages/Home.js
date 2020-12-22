import React, { useState, useEffect } from 'react';
import { List, ListItem } from '../components/List';
import BookModal from '../components/BookModal/BookModal.js';
import BookRow from '../components/BookRow/BookRow.js';
import API from '../utils/API';
import { Fade } from 'react-reveal';


function Home() {

    const [ books, setBooks ] = useState([]);
    const [ hovered, setHovered ] = useState(false)

    const toggleHover = () => {
        console.log('hovered')
        setHovered(!hovered)
    }

    const genreArray = [
        'crime', 'fantasy', 'biography', 'thriller'
    ];

    const getBookData = () => {
        genreArray.forEach(type => {
            API.bookGenreSearch(type).then(res => {
                setBooks(books => [...books, ...res.data.items])
            }).catch(err => console.log(err))
        })
    }

    useEffect(() => {
        getBookData();
    }, [])


    const selectBook = event => {
        event.preventDefault();
        const etag = event.target.alt;
        API.singleBoookSearch(etag)
            .then(response => {
                if (response.status === 200 && response.data.items) {
                    // console.log(response.data.items[0])
                } else {
                    console.log(`no book data available`)
                }
            })
            .catch(error => console.log(error))
    }

    return (
    <div>
        <div className="flex-col">
            {genreArray.map(genre => {
                return (
                    <BookRow books={books} onClick={e => selectBook(e)} genre={genre} />
                )
            })}
        </div>
    </div>
    )
}

export default Home;
