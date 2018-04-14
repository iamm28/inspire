import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import manageInspiration from './reducers/manageInspiration'
import createStore from './createStore'

let store= createStore(manageInspiration)

export function render(){
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}

store.dispatch({type: '@@INIT'})
 
registerServiceWorker();
