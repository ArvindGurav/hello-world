import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.eventhandler('Arvind')}>Click</button>
    </div>
  )
  
}
