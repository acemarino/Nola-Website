import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.scss'
import App from './App';

import { HashRouter } from 'react-router-dom';

//hasrouter used to prevent 404 on refresh instead of import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <App />
</HashRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
