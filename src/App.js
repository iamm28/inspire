import React, { Component } from 'react';
import CreateInspiration from './components/CreateInspiration'
import InspirationList from './components/InspirationList'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateInspiration store={this.props.store} />
        <InspirationList store={this.props.store} />
      </div>
    );
  }
}

export default App;
