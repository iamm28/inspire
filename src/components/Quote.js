import React, {Component} from 'react'

class Quote extends Component {
  render() {

    return(
      <div>
        {<h2 width="90%"> {`${this.props.quote}`} </h2>}
      </div>
    )
  }

}
export default Quote;
