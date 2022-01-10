import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Welcome_cls extends Component{
    
    render(){
        return (
            <button className="btn btn-primary" onClick={()=>{alert("hello my fucking ass hole i am from class")}}>Click me from class</button>
        );
    };
}
export default Welcome_cls