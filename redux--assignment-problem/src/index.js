import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Reducer from './Reducer'


import { Provider } from 'react-redux';
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
