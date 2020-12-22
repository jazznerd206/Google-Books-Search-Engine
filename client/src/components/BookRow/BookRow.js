import React, { useState } from 'react';
import BookModal from '../BookModal/BookModal';
import useModal from '../../hooks/useModal.js';
import './styles.css';

function BookRow(props) {

    const [ hovered, setHovered ] = useState(false)
    // const {isShowing, toggle} = useModal();


    const toggleHoverOn = () => {
        console.log('hovered')
        setHovered(true);
    }

    const toggleHoverOff = () => {
        console.log('not hovered')
        setHovered(false)
    }

    const titleStyle = {
        textTransform: 'uppercase',
        textAlign: 'left',
        paddingLeft: '50px',
        background: 'rgb(245,245,245,.5)',
        color: 'rgb(50,50,50)'
    }

    return (
        <div>
            <div className="title" style={titleStyle}>
                <h1>{props.genre}</h1>
            </div>
            <ul className="book-row">
                {props.books.filter(book => book.volumeInfo.previewLink.includes(props.genre))
                            .map(book => (
                                <li
                                    className="list-item"
                                    key={book.id}
                                    value={book.etag}
                                >
                                    
                                    <img 
                                        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                                        value={book.volumeInfo.title}
                                        alt={book.id}
                                        // onClick={toggle}
                                        onClick={e => props.onClick(e)}
                                        onMouseEnter={toggleHoverOn}
                                        onMouseLeave={toggleHoverOff}
                                    />
                                </li>
                            ))}
            </ul>
        </div>
    )
}

export default BookRow;
