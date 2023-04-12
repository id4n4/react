
import PropTypes from 'prop-types'

function GifItem({id,title,url}) {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {}

export default GifItem
