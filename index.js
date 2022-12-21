import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './SearchProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider initialState={initialState} reducer={reducer}>
    <App />
  </SearchProvider>
);

// here we have wrapped the app with stateprovider(data), so it means whole app will get data like they will be provided with the data.
// we will send them 3 things: reducer,initialstate and children.