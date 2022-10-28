import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

function CounterCustomOne() {
  const [count, increment, decrement, reset] = useCounter(10,1)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterCustomOne
