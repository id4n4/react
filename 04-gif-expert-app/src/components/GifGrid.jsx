import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';



function GifGrid({ category }) {
    useEffect(() => {
        getGifs(category);
    }, [ ])
    return (
        <>
            <h3>{category}</h3>

        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid
