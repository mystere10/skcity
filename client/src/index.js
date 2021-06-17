import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './component/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducers/sneakers';
import middleWare from './Redux/middleware';

const store = createStore(reducer, composeWithDevTools(middleWare));
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
