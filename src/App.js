import React from 'react'

function Greeting () {
  const r = Math.random(Math.random() * 3)
  if (r === 0) return <p>今日もがんばりましょう</p>
  if (r === 1) return <p>今日もがんばりましょう</p>
  if (r === 2) return <p>今日もがんばりましょう</p>
}

class App extends React.Component() {
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
