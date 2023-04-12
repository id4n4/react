import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react';
import GifItem from './GifItem';
import { getGifs } from '../helpers/getGifs';



function GifGrid({ category }) {
    const [images, setimages] = useState([])
    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages)
    }
    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid
