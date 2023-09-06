import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

// Redux 
// import store from './store';

// Redux Toolkit
import store from './redux_toolkit/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


