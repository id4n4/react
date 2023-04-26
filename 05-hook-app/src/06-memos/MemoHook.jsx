import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const heavyProcess = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Ahi vamos...')
  }
  return `${iterations} iteraciones realizadas`
}

export const MemoHook = () => {
  const {counter, increment} = useCounter(4000)
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyProcess(counter), [counter])
  return (
    <>
      <h1>counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => setShow( !show )}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}
