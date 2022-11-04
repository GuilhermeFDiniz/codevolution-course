import React, { useState } from 'react'

const ChildThree = ({children, name}) => {
  console.log('ChildThree Render')
  return (
    <div>
      {children} {name}
    </div>
  )
}

export default ChildThree
export const MemoizedChildThree = React.memo(ChildThree)
