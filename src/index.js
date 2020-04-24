import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { memoryStorage } from './utils/memoryUtils'
import { getStorage } from './utils/storageUtils'

memoryStorage.user = getStorage()

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
