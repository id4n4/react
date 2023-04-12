import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';
import { useState } from 'react';



function GifGrid({ category }) {
    const [counter, setcounter] = useState(10)
    useEffect(() => {
        getGifs(category);
    }, [ ])
    return (
        <>
            <h3>{category}</h3>

            <h5>{counter}</h5>
            <button onClick={() => setcounter(counter + 1)}>+1</button>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid
