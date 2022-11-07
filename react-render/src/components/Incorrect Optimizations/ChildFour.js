import React from 'react'

const ChildFour = ({name}) => {

  console.log("ChildFour Render")
  const date = new Date()
  return (
    <div>
      Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  )
}

export default ChildFour
export const MemoizedChildFour = React.memo(ChildFour)
