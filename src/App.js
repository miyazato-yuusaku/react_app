import React from 'react'
import PropTypes from 'propTypes'

function Greeting (props) {
  return <h1 onClick={props.onClick}>Hello {props.name}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

const App = <Greeting name='everyone' onClick={function() {alert('click')}} />

export default App
