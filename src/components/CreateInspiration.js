import React, {Component} from 'react'

class CreateInspiration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }
  
  handleChange(event) {
    this.setState({
      url: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_INSPIRATION',
      inspiration: this.state,
    })
    this.setState({
      url: '',
    })
  }
  
  render() {
    return(
      <div>
        Create Inspiration 
        <form onSubmit={(event) => this.handleSubmit()}>
          <label> Add Video </label>
          <input type='url' value={this.state.url} onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
  
}

export default CreateInspiration;