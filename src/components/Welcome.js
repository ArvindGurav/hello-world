import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Message from Class component {this.props.name}</h1>
    }
}

export default Welcome