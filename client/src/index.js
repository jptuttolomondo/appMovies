import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import dotenv from 'dotenv'
import './index.css';
import App from './App';
dotenv.config(); 
const rootElement=document.getElementById("root");
render(
   <BrowserRouter>
        <App />
  </BrowserRouter>,
 rootElement
);

