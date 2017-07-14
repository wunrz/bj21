import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import stores from './store';
import { Provider } from 'mobx-react';




ReactDOM.render(
  <Provider Store={stores.Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
