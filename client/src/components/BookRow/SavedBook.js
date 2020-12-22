import React, { useState } from 'react';
import API from '../../utils/API.js';
import useModal from '../../hooks/useModal.js';
import SaveBtn from "../SaveBtn/index.js";
// import BookModal from '../BookModal/BookModal.js';
import './styles.css';

function Book(props) {

    const { isShowing, toggle } = useModal()

    // const saveBook = book => {
    //     API.saveBook(book)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err));
    // };

    return (
        <li
            className="list-item"
            key={props.book.id}
            value={props.book.etag}
        >
            
            <img 
                src={props.book.image}
                value={props.book.title}
                alt={props.book.title}
                // onClick={toggle}
                onMouseEnter={toggle}
                onMouseLeave={toggle}
            />
            {isShowing && (
                <div className="modalite">
                    <div className="title">
                    {props.book.title}
                    </div>
                    <div className="author">
                    {props.book.author}
                    </div>
                </div>
            )}
        </li>
    )
}

export default Book
