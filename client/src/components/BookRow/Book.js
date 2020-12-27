import React from 'react';
import API from '../../utils/API.js';
import useModal from '../../hooks/useModal.js';
// import SaveBtn from "../SaveBtn/index.js";
import { Fade } from 'react-awesome-reveal';
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
            onMouseEnter={toggle}
            onMouseLeave={toggle}
        >
            
            <img 
                src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : null}
                value={props.book.volumeInfo.title}
                alt={props.book.id}
                // onClick={toggle}
            />
            {isShowing && (
                <Fade duration={300}>
                    <div className="modalite">
                        <div className="title">
                            {props.book.volumeInfo.title}
                        </div>
                        <div className="author">
                            By {props.book.volumeInfo.authors[0]}
                        </div>
                        <div className="row">
                            <div className="save">
                                Save book
                            </div>
                            <div 
                                className="icon"
                                onClick={e => saveBook({
                                    title: props.book.volumeInfo.title,
                                    author: props.book.volumeInfo.authors[0],
                                    description: props.book.volumeInfo.description,
                                    image: props.book.volumeInfo.imageLinks.smallThumbnail,
                                    link: props.book.volumeInfo.infoLink,
                                    _id: props.book.id
                                    })}
                            >
                                <i className="fas fa-plus-circle fa-2x"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="description">
                                {props.book.volumeInfo.description}
                            </div>
                        </div>
                    </div>
                </Fade>
            )}
        </li>
    )
}

export default Book
