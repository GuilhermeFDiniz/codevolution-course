import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'



const ParentFour = (  ) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Guilherme')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne'
  }

  const handleClick = () => {}


  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setCount(c => c +1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change Name</button>
      <MemoizedChildFive name={name} handleClick={person}/>
    </div>
  )
}

export default ParentFour
