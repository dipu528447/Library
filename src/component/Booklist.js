import React, { Component } from 'react';
// import Book from './Book';
import '../stylesheet/Book.css';
import book from '../state/Data_state';
import CmpBook from './CmpBook';
import NewBook from './NewBook';
import { Nav, Navbar, NavItem} from 'reactstrap'
import {Routes,Route, Link} from 'react-router-dom';
import Details from './Details';

class Booklist extends Component {
    constructor(){
        super();
        this.state={
            books:book,
            selected_book:null
        }
    }
    change_input=(event,i)=>{
        const book={...this.state.books[i]};
        book.name=event.target.value;
        const bks=[...this.state.books];
        bks[i]=book;
        
        this.setState({
            books:bks
        })
    }
    deleteItem=index=>{
        const book=[...this.state.books];
        book.splice(index,1);
        this.setState({
          books:book              
        })
    }
    selectedItem=index=>{
        this.setState({
            selected_book:index
        })
    }
    render() {
        let bklist = <CmpBook books = {this.state.books} change_input = {this.change_input} deleteItem = {this.deleteItem} selectedItem = {this.selectedItem.bind(this)}></CmpBook>;
        return (
            <div>
                <div>
                    <Navbar color='secondary'>
                        <Nav>
                            <NavItem>
                                <Link to="/" style={{textDecoration:'none',color:"white",padding:"10px"}}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/new_book" style={{textDecoration:'none', color:'white',padding:"10px"}}>
                                    New Book
                                </Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <h1>Booklist</h1>
                </div>

                <Routes> 
                    <Route path="/" exact element = {bklist}/>
                    <Route path="/new_book" exact element = {<NewBook/>}/>
                    <Route path="/details" exact element = {<Details id={this.state.selected_book}/>}/>
                </Routes>
            </div>
        );
    }
}
export default Booklist;