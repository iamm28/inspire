import React, { Component } from 'react'
import Inspiration from './Inspiration'

class InspirationList extends Component {
  render() {
    const inspirationList = this.props.store.getState().inspiration.map((inspiration, index) => {
      return <Inspiration key={index} url={inspiration.url}/>
    })
    
    return(
      <ul>
        {inspirationList}
      </ul>
    )
  }
}

export default InspirationList