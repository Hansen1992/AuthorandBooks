import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {

    //error handeling 
    if(books === undefined) {
        return (
            <div className='ui container'>
                <div className='ui segment'>
            <div> The searched author og title either does not excist in our database, or the name is wrongly spelled.</div>
            </div>
            </div>
        )
    }
    // Array.from makes sure the props books is read as an array
    books = Array.from(books)
    const renderedList = books.map((books, index) => {
        return (
        <Book
        book={books}
        key={index}
         />
        )
    })
    return <div>{renderedList}</div>
};

export default BookList;