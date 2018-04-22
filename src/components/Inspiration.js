import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Inspiration extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    const vid = this.props.video.split('v=')[1]
    const img = this.props.webImage 
    return (
      <div>
      <YouTube
        videoId={vid}
        opts={opts}
        onReady={this._onReady}
      />
      <img src={img} height='390' width='640'/>
      </div>
    )
  }
}

export default Inspiration;
