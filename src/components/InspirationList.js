import React, { Component } from 'react'
import WebImage from './WebImage'
import YouTubeVideo from './YouTubeVideo'
import FileInspiration from './FileInspiration'
import AudioFile from './AudioFile'

class InspirationList extends Component {
  render() {
    const videoList = this.props.store.getState().videos.map((v, index) => {
      return <YouTubeVideo key={index} video={v}/>
    })

    const webImageList = this.props.store.getState().webImages.map((w, index) => {
      return <WebImage key={index} webImage={w}/>
    })

    const fileList = this.props.store.getState().files.map((f, index) => {
      return <FileInspiration key={index} file={f}/>
    })

    const audioFileList = this.props.store.getState().audioFiles.map((a,index) => {
      return <AudioFile key={index} audioFile={a} />
    })

    return(
      <div className="grid">
        {videoList}
        {webImageList}
        {fileList}
        {audioFileList}
      </div>
    )
  }
}

export default InspirationList;
