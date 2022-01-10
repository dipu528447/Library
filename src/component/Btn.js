import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Btn(props){
        
        function click()
        {
            var txt1=document.getElementById("txt1").value;
            var txt2=document.getElementById("txt2").value;
            var txt3=document.getElementById("txt3").value;
            var a=0;
            a=(txt1>txt2 && txt1>txt3)?txt1:(txt2>txt1 && txt2>txt3)?txt2:txt3;
            alert(a+" is big");
        }
        return (
            <button className="btn btn-primary" onClick={click}>Click Me</button>
        );
    
}
export default Btn;