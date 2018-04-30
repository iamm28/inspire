import React, {Component} from 'react'
import axios, { post } from 'axios';

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
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleChangeFile(event) {
    console.log(event.target.files[0].name)
    this.setState({
      file: event.target.files[0].name
    })
  }

  fileUpload(file){
    const url = 'tcp://localhost:3001/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData,config)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
    if (this.state.file != undefined) {
      this.props.store.dispatch({
        type: 'ADD_FILE',
        file: this.state.file,
      })
    }
    if (this.state.video != undefined) {
      this.props.store.dispatch({
        type: 'ADD_VIDEO',
        video: this.state.video,
      })
    }
    if (this.state.webImage != undefined) {
      this.props.store.dispatch({
        type: 'ADD_WEB_IMAGE',
        webImage: this.state.webImage,
      })
    }
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
          <input name='file' type='file' value={this.state.file} onChange={(event) => this.handleChangeFile(event)}/>
          <label> Add YouTube Video </label>
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
//
