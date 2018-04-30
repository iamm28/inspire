import React, {Component} from 'react'

class CreateInspiration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: undefined,
      webImage: undefined,
      file: undefined,
    }
  }

  handleChange(event) {
    // debugger
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_FILE',
      video: this.state.file,
    })
    this.props.store.dispatch({
      type: 'ADD_VIDEO',
      video: this.state.video,
    })
    this.props.store.dispatch({
      type: 'ADD_WEB_IMAGE',
      webImage: this.state.webImage,
    })
    this.setState({
      video: '',
      webImage: '',
      file: '',
    })
  }

  render() {
    return(
      <div>
        Create Inspiration
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Add File From Computer </label>
          <input name='file' type='file' value={this.state.file} onChange={(event) => this.handleChange(event)}/>
          <label> Add Video </label>
          <input name='video' type='url' value={this.state.video} onChange={(event) => this.handleChange(event)}/>
          <label> Add Image From Web </label>
          <input name='webImage' type='url' value={this.state.webImage} onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default CreateInspiration;
