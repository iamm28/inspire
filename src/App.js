import React, { Component } from 'react';
import CreateInspiration from './components/CreateInspiration'
import InspirationList from './components/InspirationList'
import './App.css';
import Navbar from './components/Navbar'
import WebImage from './components/WebImage'
import YouTubeVideo from './components/YouTubeVideo'
import FileInspiration from './components/FileInspiration'
import AudioFile from './components/AudioFile'
import Quote from './components/Quote'
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/inspiration-board' component={ InspirationList }/>
          <Route exact path='/profile' component={ CreateInspiration }/>
          <Route exact path='/audio' component={ AudioFile }/>
          <Route exact path='/video' component={ YouTubeVideo }/>
          <Route exact path='/quotes' component={ Quote }/>
          <Route exact path='/Images' component={ WebImage }/>
          <Route exact path='/Files' component={ FileInspiration }/>
          <Redirect exact from="/" to="/inspiration-board" />
        </Switch>
        <CreateInspiration store={this.props.store} />
        <InspirationList store={this.props.store} />
      </div>
    );
  }
}

export default App;






// <Route exact path='/login' component={ LogIn }/>
// <Route exact path='/signup' component={ SignUp }/>
// ----
// import React, { Component } from 'react'
// import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
//
// import LogIn from './LogIn'
// import SignUp from './SignUp'
// import ProfileContainer from './ProfileContainer'
// import HomeContainer from './HomeContainer'
// import EventTinder from './EventTinder'
// import CalendarContainer from './CalendarContainer'
//
// class MainContainer extends Component {
//   render() {
//     return (
//
//     )
//   }
// }
//
// export default MainContainer
