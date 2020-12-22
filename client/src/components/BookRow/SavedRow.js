import React, { useState } from 'react';
import SavedBook from './SavedBook.js';
import BookModal from '../BookModal/BookModal';
import useModal from '../../hooks/useModal.js';
import './styles.css';

function SavedRow(props) {

    // const [ hovered, setHovered ] = useState(false)
    // const {isShowing, toggle} = useModal();


    // const toggleHover= () => {
    //     console.log('hover')
    //     setHovered(!hovered);
    // }

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
                {props.books.map(book => (
                    <SavedBook 
                        book={book} 
                        onClick={props.onClick}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SavedRow;
