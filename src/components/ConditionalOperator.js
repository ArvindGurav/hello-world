import React, { Component } from 'react'

class ConditionalOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }

    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                  Welcome User
                </div>
              )
        } else {
            return (
                <div>
                    Please Login
                </div>
            )
        }
      }
    
//   render() {
//     if(this.state.isLoggedIn) {
//         return (
//             <div>
//               Welcome User
//             </div>
//           )
//     } else {
//         return (
//             <div>
//                 Please Login
//             </div>
//         )
//     }
//   }
}

export default ConditionalOperator
