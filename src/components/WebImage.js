import React, {Component} from 'react'

class WebImage extends Component {
  render() {

    return(
      <div>
        {<img alt={`${this.props.webImage}`} src={`${this.props.webImage}`} height='390' width='640'/>}
      </div>
    )
  }

}
export default WebImage;
