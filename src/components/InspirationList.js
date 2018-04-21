import React, { Component } from 'react'
import Inspiration from './Inspiration'

class InspirationList extends Component {
  render() {
    const videoList = this.props.store.getState().inspiration.map((inspiration, index) => {
      return <Inspiration key={index} video={inspiration.video}/>
    })
    
    return(
      <ul>
        <p> List </p>
        {videoList}
        
      </ul>
    )
  }
}

export default InspirationList

// const webImageList = this.props.store.getState().inspiration.map((inspiration, index) => {
//   return <Inspiration key={index} webImage={inspiration.webImage}/>
// })
// 
// {webImageList}