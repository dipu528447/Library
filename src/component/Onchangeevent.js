import React, { Component } from 'react';


class Onchangeevent extends Component {
    constructor(){
        super();
        this.state={
            username:" ",
            password:" ",
            email:" ",
            phone:" "
        };
        this.onChangeHandler=this.onChangeHandler.bind(this);
    }
    onChangeHandler(event){
        var c=event.target.name;
        var d=event.target.value;
        this.setState({[c]: d});
    }
    onSubmitHandler(){
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <p>{this.state.username}</p><br></br>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder='name'></input>
                    <input name="password" onChange={this.onChangeHandler} type="password" placeholder='password'></input>
                    <input name="email" onChange={this.onChangeHandler} type="email" placeholder='email'></input>
                    <input name="phone" onChange={this.onChangeHandler} type="phone" placeholder='phone'></input>
                    <input type="Submit" defaultValue="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Onchangeevent;