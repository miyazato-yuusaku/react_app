import React from 'react'

const Title = props => {
  return (
      <h1>{props.text}</h1>
  )
}

class App extends React.Component() {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Title text='helloworld!!'/>
      </div>
    )
  }
}

export default App
