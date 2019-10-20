import React from 'react';
import './Book.css';
// Hvis dit HMTL ser underligt ud, så npm install ReactHtmlParser, der sørger for, at dit html ser ordentligt ud, hvis du har typescript installeret.
//Du er nået hertil: få works input ind istedet for author, da den skulle kunne seperere om du søger efter bøger eller author. 

const Book = ({ book }) => {
    return (
        <div className="ui container">
            <div className="ui raised segment" id='segment-ui'>
        <h2> Author: <br/>
         {book.authorweb}
        </h2>
         <h2> Title: <br/>
         {book.titleweb}</h2>
         </div>
         </div>
         
    )
};

export default Book;