import React from 'react';

function Book(param){
    return (
        <div>
            <h3>Book : {param.name}</h3>
            <h4>Author : {param.author}</h4>
        </div>
    );
}
export default Book;