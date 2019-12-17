import React from 'react'

function textselect () {
  const r = Math.random(Math.random() * 3)
  if (r === 0) return <p>今日もがんばりましょう</p>
  if (r === 1) return <p>いやーーーーーーー</p>
  if (r === 2) return <p>やーーーーーーー</p>
}
const Greeting = props => {
  return (
    textselect()
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
        <Greeting />
      </div>
    )
  }
}

export default App
