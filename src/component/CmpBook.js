import React from 'react';
import Book from './Book';

const CmpBook = props => {
    return (
        props.books.map(function(bk,index){
        return (
            <Book
                name={bk.name} 
                author={bk.author} 
                key={bk.id}
                change_text={(event)=>{props.change_input(event,index)}}
                deleteItem={()=>{props.deleteItem(index)}}
                selectedItem={()=>{props.selectedItem(bk.id)}}    
            />
            )
        })
    );
};

export default CmpBook;