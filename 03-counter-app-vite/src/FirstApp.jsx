import {Fragment} from 'react'

function getTitle() {
    return obj.title;
}
const obj = {
    title: "First App!!!",
    text: "lorem ipsum dolor"
}

function FirstApp() {
    return (
        <Fragment>
            {/* <code>{JSON.stringify(obj)}</code> */}
            <h1>{getTitle()}</h1>
            <p>{obj.text}</p>
        </Fragment>
    )
}

export default FirstApp