import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
import {MemoizedChildThree} from './ChildThree'


const ParentThree = (  ) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Guilherme')


  console.log('ParentThree Render')
  return (
    <div>
      <button onClick={() => setCount(c => c +1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change Name</button>
      {/* <MemoizedChildThree name={name}>
       <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name}/>
    </div>
  )
}

export default ParentThree
