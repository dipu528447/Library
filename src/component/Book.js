import React from 'react';
import '../stylesheet/Book.css';
import { Link } from 'react-router-dom';

function Book(param){
    return (
        
        <div>
            <div className="Book" style={{color:"black"}}>
                <h3> Book : {param.name} </h3>
                <h4> Author : {param.author} </h4>
                <div>
                    <label>Change Book Name : </label>
                    <input type="text" onChange={param.change_text}></input>
                </div>
                <Link to="/details"><button className='btn btn-warning m-3' onClick={param.selectedItem}>Details</button></Link>
                <button className='btn btn-danger m-3' onClick={param.deleteItem}>Delete</button>
            </div>
        </div>
        
    );
}
export default Book;