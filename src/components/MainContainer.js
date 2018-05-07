import React, { Component } from 'react';
import CreateInspiration from './CreateInspiration'
import InspirationList from './InspirationList'
import '../App.css';

import WebImage from './WebImage'
import YouTubeVideo from './YouTubeVideo'
import FileInspiration from './FileInspiration'
import AudioFile from './AudioFile'
import Quote from './Quote'
import { Switch, Route, Redirect } from 'react-router-dom';

class MainContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/inspiration-board' component={ InspirationList }/>
        <Route exact path='/profile' component={ CreateInspiration }/>
        <Route exact path='/audio' component={ AudioFile }/>
        <Route exact path='/video' component={ YouTubeVideo }/>
        <Route exact path='/quotes' component={ Quote }/>
        <Route exact path='/images' component={ WebImage }/>
        <Route exact path='/files' component={ FileInspiration }/>
        <Redirect exact from="/" to="/inspiration-board" />
      </Switch>
    )
  }
}
export default MainContainer;
