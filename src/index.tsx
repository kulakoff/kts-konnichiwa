import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
// import App from './App';
import TestElements from '@pages/TestElements';

// import  "./root"

ReactDOM.render(
  <BrowserRouter>
    <TestElements />
  </BrowserRouter>,
  document.getElementById('root')
);


