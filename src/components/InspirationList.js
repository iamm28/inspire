import React, { Component } from 'react'
import Inspiration from './Inspiration'
import FileInspiration from './FileInspiration'

class InspirationList extends Component {
  render() {
    const videoList = this.props.store.getState().videos.map((v, index) => {
      return <Inspiration key={index} video={v}/>
    })
    const webImageList = this.props.store.getState().webImages.map((w, index) => {
      return <Inspiration key={index} webImage={w}/>
    })
    const fileList = this.props.store.getState().files.map((f, index) => {
      return <FileInspiration key={index} file={f}/>
    })
    return(
      <ul>
        <p> List </p>
        {videoList}
        {webImageList}
        {fileList}
      </ul>
    )
  }
}

export default InspirationList
