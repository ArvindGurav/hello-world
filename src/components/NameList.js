import React from 'react'

function NameList() {
    //const names = ['Arvind', 'Arun', 'Mangala', 'Anita']
    const persons = [
        {
            id : 1,
            name : 'Arvind',
            age: '29'
        },
        {
            id : 2,
            name : 'Arun',
            age: '57'
        }
    ]
  return (
    <div>
        {
            persons.map( person => 
                    <div key={person.id}>
                        <h2>I am {person.name}</h2>
                        <h2>My age is {person.age}</h2>
                    </div>
                )
        }
    </div>
    // <div>
    //     {names.map( name=> 
    //         <h2>{name}</h2>
    //     )}
    // </div>
  )
}

export default NameList
