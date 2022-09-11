import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:''
      }
    }

    greetParent = (name) => {
        this.setState({
            message: 'Hello' +name
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <ChildComponent eventhandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
