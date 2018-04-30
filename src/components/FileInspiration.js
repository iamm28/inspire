import React, {Component} from 'react'

class FileInspiration extends Component {
  render() {
    // console.log(this.props.file)
    return(
      <div>
        {<img alt={`${this.props.file}`} src={`${this.props.file}`} height='390' width='640'/>}
      </div>
    )
  }
}
export default FileInspiration;
