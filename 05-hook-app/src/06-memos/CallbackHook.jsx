import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  return (
    <>
      <h1>useCallBack hook : {counter}</h1>
      <hr />

      <ShowIncrement increment={() => setCounter(counter + 1)} />
    </>
  )
}
