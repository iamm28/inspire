import React, {Component} from 'react'

class CreateInspiration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: '',
      webImage: '',
    }
  }
  
  handleChange(event) {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_INSPIRATION',
      inspiration: this.state,
    })
    this.setState({
      video: '',
      webImage: '',
    })
  }
  
  render() {
    return(
      <div>
        Create Inspiration 
        <form onSubmit={(event) => this.handleSubmit(event)}>
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