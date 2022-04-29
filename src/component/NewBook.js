import React,{Component} from 'react';
import {Input, Label, Button} from 'reactstrap'
import book from '../state/Data_state';
class NewBook extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            author:"",
            description:""
        }   
        this.handlerInputchange=this.handlerInputchange.bind(this);
        this.handlerSubmit=this.handlerSubmit.bind(this);
    }
    handlerInputchange(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    handlerSubmit(event){
        event.preventDefault()
        book.push(this.state);
        alert("New Book Added");        
    }
    
    render(){
        return (
            <div>
                <div className='container'>
                    <h2>New Book</h2>
                    <form type="submit" onSubmit={this.handlerSubmit}>
                        <Label for="Book Name">Book Name</Label>                        
                        <Input type="text" name="name" id="txtName" onChange={this.handlerInputchange}/>
                        <Label for="Author Name">Author Name</Label>
                        <Input type="text" name="author" id="txtAuthor" onChange={this.handlerInputchange}/>
                        <Label for="Description">Description</Label> 
                        <Input type="textarea" name="description" id="txtDescription" onChange={this.handlerInputchange}/>
                        <br/>
                        <Button onClick={this.submit_form}>Submit</Button>
                    </form>
                </div>
            </div>
        );
    };
}
export default NewBook;