import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import {persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
);

