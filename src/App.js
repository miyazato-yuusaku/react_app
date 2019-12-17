import React from 'react'

const Hello = props =>
    <h1>{props.message}</h1>

const App = props => {
    return (
        <div>
            <Hello message = "Hello world" />
        </div>
    )
}

export default App
