import React, { useState } from 'react'
import PropTypes from 'prop-types'


function CounterApp({ value }) {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter((e) => e + 1)
    const handleSubstract = () => setCounter(e => e - 1)
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="test-value">{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
