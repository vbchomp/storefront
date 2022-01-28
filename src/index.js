import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.js';
import App from './App.js';

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
