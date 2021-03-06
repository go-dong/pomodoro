import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Reducer from './reducer';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Container from './App';

const store = createStore(Reducer);

ReactDOM.render(
    <Container store={store} />
  , document.getElementById('root'));

serviceWorker.unregister();
