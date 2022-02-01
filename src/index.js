import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import store from './store/store.js';

const rootElement = document.getElementById('root');
ReactDOM.render(
<StrictMode>
{/* wrapper */}
  <Provider store={store}>
    <App />
  </Provider>
</StrictMode>, 
rootElement
);
