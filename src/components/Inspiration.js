import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Inspiration extends Component {
  list() {
    if (this.props.video && this.props.webImage) {
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
            opts={opts}
            onReady={this._onReady}
          />
          <img src={`${this.props.webImage}`} height='390' width='640'/>
        </div>
      )
    } else if (this.props.video) {
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
           opts={opts}
           onReady={this._onReady}
         />
       </div>
     )
   } else if (this.props.webImage) {
   //const img = this.props.webImage
    return (<img src={`${this.props.webImage}`} height='390' width='640'/>)
  }
  }
  render() {
    return(
      <div>
        {this.list()}
      </div>
    )
  }
}

export default Inspiration;
