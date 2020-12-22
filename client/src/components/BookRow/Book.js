import React, { useState } from 'react';
import API from '../../utils/API.js';
import useModal from '../../hooks/useModal.js';
import SaveBtn from "../SaveBtn/index.js";
// import BookModal from '../BookModal/BookModal.js';
import './styles.css';

function Book(props) {

    const { isShowing, toggle } = useModal()

    const saveBook = book => {
        API.saveBook(book)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err));
    };

    return (
        <li
            className="list-item"
            key={props.book.id}
            value={props.book.etag}
        >
            
            <img 
                src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : null}
                value={props.book.volumeInfo.title}
                alt={props.book.id}
                // onClick={toggle}
                onClick={e => saveBook({
                    title: props.book.volumeInfo.title,
                    author: props.book.volumeInfo.authors[0],
                    description: props.book.volumeInfo.description,
                    image: props.book.volumeInfo.imageLinks.smallThumbnail,
                    link: props.book.volumeInfo.infoLink,
                    _id: props.book.id
                    })}
                onMouseEnter={toggle}
                onMouseLeave={toggle}
            />
            {isShowing && (
                <div className="modalite">
                    <div className="title">
                    {props.book.volumeInfo.title}
                    </div>
                    <div className="author">
                    {props.book.volumeInfo.authors[0]}
                    </div>
                </div>
            )}
        </li>
    )
}

export default Book
