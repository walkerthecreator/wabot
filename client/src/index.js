import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import  AppProvider  from './context/cart';
import { Provider } from 'react-redux';
import  Store  from './app/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        {/* <AppProvider> */}
        <Provider store={Store}>
            <App/>
        </Provider>
        {/* </AppProvider> */}
    </Router>
  </React.StrictMode>
);

