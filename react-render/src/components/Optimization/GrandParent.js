import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0)
  console.log('GrandParent Render')
  return (
    <div>
      <button onClick={() => setNewCount((newCount) => newCount+1)}>GrandeParent Count - {newCount}</button>
      <ParentOne newCount={newCount}>
        <ChildOne/>
      </ParentOne>
    </div>
  )
}

export default GrandParent
