import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Frontpart(props){
    return(
        <form>
            <div className="container">
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only">{props.name}</label>
                        <input type="number" className="form-control mb-2" id={props.id}></input>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Frontpart;