import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import Shop from "./Shop";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Shop /> */}
  </React.StrictMode>
);
