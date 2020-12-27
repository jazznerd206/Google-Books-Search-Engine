import React from 'react';
// import API from '../../utils/API.js';
import useModal from '../../hooks/useModal.js';
// import SaveBtn from "../SaveBtn/index.js";
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
            onMouseEnter={toggle}
            onMouseLeave={toggle}
        >
            
            <img 
                src={props.book.image}
                value={props.book.title}
                alt={props.book.title}
                // onClick={toggle}

            />
            {isShowing && (
                <div className="modalite">
                    <div className="title">
                        {props.book.title}
                    </div>
                    <div className="author">
                        By {props.book.author}
                    </div>
                    <div className="row">
                            <div className="save">
                                Remove book
                            </div>
                            <div 
                                className="icon"
                                onClick={e => props.onClick(props.book._id)}
                            >
                                <i className="fas fa-minus-circle fa-2x"></i>
                            </div>
                        </div>
                    <div className="row">
                        <div className="description">
                            {props.book.description}
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}

export default Book
