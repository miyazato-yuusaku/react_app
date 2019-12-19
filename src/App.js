import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentDitMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {

    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({ r: Math.random() })
    }

    return (
      <div>
        <button onClick={setStateHandler}>
          setState
        </button>
      </div>
    )
  }
}

export default App
