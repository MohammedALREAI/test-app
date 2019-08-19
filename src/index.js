import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from'./reducers/balance';
import {Provider} from 'react-redux'

import './index.css';
import { createStore } from 'redux';

const store=createStore(rootReducer)

render(
<Provider store={store}><App /></Provider>,
  
  document.getElementById('root')
);