import React, {Component} from 'react'

class WebImage extends Component {
  render() {

    return(
      <div>
        {<img alt={`${this.props.webImage}`} src={`${this.props.webImage}`} width="90%"/>}
      </div>
    )
  }

}
export default WebImage;

//height='390' width='640'
// https://cdn-images-1.medium.com/max/1600/0*zj48hNGvARXqAXau.jpg
