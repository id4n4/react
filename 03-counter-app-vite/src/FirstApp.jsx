import { Fragment } from 'react'
import PropTypes from 'prop-types'

function getTitle() {
    return obj.title;
}
const obj = {
    title: "First App!!!",
    text: "lorem ipsum dolor"
}

function FirstApp({ title, subtitle }) {


    return (
        <Fragment>
            {/* <code>{JSON.stringify(obj)}</code>
            <h1>{getTitle()}</h1>
            <p>{obj.text}</p> */}
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}
FirstApp.defaultProps = {
    title: "Hola mundo",
    subtitle: 1234
}
export default FirstApp
