import React from 'react'

const Greeting = props => {
  const r = Math.floor(Math.random() * 3)
  if (r === 0) return <p>{this.props}</p>
  if (r === 1) return <p>{this.props}</p>
  if (r === 2) return <p>{this.props}</p>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Greeting />
      </div>
    )
  }
}

export default App
