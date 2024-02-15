import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px; 
  line-height: 1; 
  letter-spacing: normal; 
  font-style: normal;
  font-weight: normal; 
  
}
p, div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
  
}

`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Global/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
