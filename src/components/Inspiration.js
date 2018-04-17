import React, {Component} from 'react'
// import YouTube from 'react-youtube';

class Inspiration extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const vid = this.props.url.split('')
    console.log(vid) 
    return (
      <div>
        
        <a href={this.props.url}>{this.props.url}</a>
        <iframe width="420" height="315" src={this.props.url} key={this.props.url}></iframe>
      </div>
    )
  }
}

export default Inspiration;

// <YouTube
//   videoId="2g811Eo7K8U"
//   opts={opts}
//   onReady={this._onReady}
// />