import { Fragment } from 'react'
import PropTypes from 'prop-types'

function getTitle() {
    return obj.title;
}
const obj = {
    title: "First App!!!",
    text: "lorem ipsum dolor"
}

function FirstApp({ title, subtitle, name}) {


    return (
        <Fragment>
            {/* <code>{JSON.stringify(obj)}</code>
            <h1>{getTitle()}</h1>
            <p>{obj.text}</p> */}
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}
FirstApp.defaultProps = {
    // title: "Hola mundo",
    subtitle: "1234",
    name: "Juan"
}
export default FirstApp
