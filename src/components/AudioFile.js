import React, {Component} from 'react'

class AudioFile extends Component {
  render() {

    return(
      <div>
        {<audio type="audio/mpeg" src={`${this.props.audioFile}`} width="90%"/>}
      </div>
    )
  }

}
export default AudioFile;
