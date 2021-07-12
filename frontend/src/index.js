import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components";
import {defaultTheme, GlobalStyle} from "./6_Styles";
import {Provider} from "react-redux";
import index from "./2_Store"

const token = localStorage.getItem('token')
if(token) index.dispatch({type: 'TOKEN', payload: token})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={index}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

