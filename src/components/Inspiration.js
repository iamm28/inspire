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
    return (
      <div>
      <YouTube
        videoId={vid}
        opts={opts}
        onReady={this._onReady}
      />
      
      </div>
    )
  }
}

export default Inspiration;

//<iframe width="420" height="315" src={this.props.url} key={this.props.url}></iframe>
// <a href={this.props.url}>{this.props.url}</a>
//tdmyoMe4iHM miracle