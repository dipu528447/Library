import React, { Component } from 'react';
import Book from './Book';
class Booklist extends Component {
    constructor(){
        super();
        this.state={
            name: ["bangla","English","Math"],
            author: ["Rabindranath","Shakespear","Einestin"]
        }
    }
    changeOnClick(){
        this.setState({
            name:["physics","chemistry","Biology"], 
            author:["Newton","dalton","Mendelip"]
        });
    }
    render() {
        return (
            <div>
                <h1>Booklist</h1>
                <button onClick={this.changeOnClick.bind(this)}>Change</button>
                <Book name={this.state.name[0]} author={this.state.author[0]}></Book>
                <Book name={this.state.name[1]} author={this.state.author[1]}></Book>
                <Book name={this.state.name[2]} author={this.state.author[2]}></Book>
            </div>
        );
    }
}

export default Booklist;