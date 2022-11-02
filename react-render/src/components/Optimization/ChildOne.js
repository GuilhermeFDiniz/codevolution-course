import React, { useState } from 'react'

const ChildOne = () => {
  const [count, setCount] = useState(0)
  console.log('ChildOne Render')
  return (
    <div>
      ChildOne Component
    </div>
  )
}

export default ChildOne
