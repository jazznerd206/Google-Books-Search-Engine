import React from 'react';
import Book from './Book.js';
// import BookModal from '../BookModal/BookModal';
// import useModal from '../../hooks/useModal.js';
import './styles.css';

function BookRow(props) {

    const titleStyle = {
        textTransform: 'uppercase',
        textAlign: 'left',
        padding: '0px 50px 0px 50px',
        margin: '0',
        background: 'black',
        color: 'white'
    }

    return (
        <div>
            <div className="title" style={titleStyle}>
                <h1>{props.genre}</h1>
            </div>
            <ul className="book-row">
                {props.books.filter(book => book.volumeInfo.previewLink.includes(props.genre))
                            .map(book => (
                                <Book
                                    key={book.id} 
                                    book={book} 
                                    // hovered={hovered} 
                                    // onHover={toggleHover} 
                                    onClick={props.onClick}
                                />
                            ))}
            </ul>
        </div>
    )
}

export default BookRow;
