import React, {Component} from 'react'
import YouTube from 'react-youtube';

class YouTubeVideo extends Component {

  render() {
    const vid = this.props.video.split('v=')[1]
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
        <YouTube
          videoId={vid}
          onReady={this._onReady}
        />
      </div>
    )
  }

}

export default YouTubeVideo;
// opts={opts}
// https://www.youtube.com/watch?v=tdmyoMe4iHM
