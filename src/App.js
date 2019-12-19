import React from 'react'

function Greeting (props) {
  return <h1 onClick={props.onClick}>Hello {props.name}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

function handleClick () {
  alert('クリックされました')
}

const App = <Greeting name='everyone' onClick={handleClick} />

export  App
