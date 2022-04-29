import React from 'react';
import book from '../state/Data_state';

function Details(props){
    return (
        <div>
           {book.filter(bk => bk.id === props.id).map(bk => (
               <div>
                   <h2> {bk.name} </h2>
                   <h3> {bk.author} </h3>
                   <p> {bk.description} </p>
                </div>
           ))}
        </div> 
        );
};

export default Details;