import React from 'react'

const Greeting = props => {
  return (
    <h1>{props.value} - {props.items}</h1>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Greeting value='値段は' items='1200' />
      </div>
    )
  }
}

export default App
