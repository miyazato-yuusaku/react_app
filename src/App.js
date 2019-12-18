import React from 'react'

const getgreeting = () => {
  const r = Math.floor(Math.random() * 3)
  if (r === 0) return <p>今日もがんばりましょう</p>
  if (r === 1) return <p>こんにちはj</p>
  if (r === 2) return <p>今しう</p>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <getgreeting />
      </div>
    )
  }
}

export default App
