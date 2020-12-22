import React, { useState } from 'react';
import useModal from '../../hooks/useModal.js';
// import BookModal from '../BookModal/BookModal.js';
import './styles.css';

function Book(props) {

    // const [ hovered, setHovered ] = useState(false)
    const { isShowing, toggle } = useModal()

    // const toggleHover= () => {
    //     console.log('hover')
    //     setHovered(!hovered);
    // }

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
                onClick={e => props.onClick(e)}
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
