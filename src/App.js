import React from 'react'

const Greeting = props => {
  return (
    <div>
      <h1>{props.value}</h1>
        <p><img src={props.src} /></p>
    </div>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Greeting value='書道' src='https://original-sho.com/jetb/wp-content/uploads/2019/04/IMG_20190401_114855_261.jpg' />
      </div>
    )
  }
}

export default App
