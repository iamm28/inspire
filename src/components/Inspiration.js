import React, {Component} from 'react'

class Inspiration extends Component {
  render() {
    return (
      <div>
      <iframe width="420" height="315" src={this.props.url}></iframe>
      </div>
    )
  }
}

export default Inspiration;