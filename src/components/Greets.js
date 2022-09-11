import React from "react";

function Greets(props) {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} {props.surname}!!</h1>
            {props.children}
        </div>
    )
}

//const Greets = () => <h1>Hello Arvind with const</h1>

export default Greets