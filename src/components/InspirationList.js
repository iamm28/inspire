import React, { Component } from 'react'
import Inspiration from './Inspiration'

class InspirationList extends Component {
  render() {
    const videoList = this.props.store.getState().videos.map((v, index) => {
      return <Inspiration key={index} video={v}/>
    })
    const webImageList = this.props.store.getState().webImages.map((w, index) => {
      return <Inspiration key={index} webImage={w}/>
    })
    
    return(
      <ul>
        <p> List </p>
        {videoList}
        {webImageList}
      </ul>
    )
  }
}

export default InspirationList


