import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

class CounterGreeter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {count:0}

  }

  render() {
    return (
      <div>
      <h1>Greetings: {this.props.name}</h1>
      <h2 onClick={()=>{this.setState({count: this.state.count+1})}}>{this.state.count}</h2>
      </div>
  )


  }
}
render(<CounterGreeter name="Rahmona"/>, document.querySelector('main'))
