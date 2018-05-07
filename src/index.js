import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import manageInspiration from './reducers/manageInspiration'
// import createStore from './createStore'
import { createStore} from 'redux';
import { Provider } from 'react-redux';



let store= createStore(manageInspiration)

export function render(){
  ReactDOM.render((
    <Provider >
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
}

// ReactDOM.render(
//   <App store={store}/>,
//   document.getElementById('root')
// );

store.dispatch({type: '@@INIT'})

registerServiceWorker();
