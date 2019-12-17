import React from 'react'

const Title = props => {
  return (
    <p>{this.props}</p>
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
        <Title text='hello' />
      </div>
    )
  }
}

export default App
