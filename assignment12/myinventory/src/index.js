import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Product from "./Product";

ReactDOM.render(<Product />, document.getElementById('root'));


// var style = {
//     backgroundColor: 'orange',
//     align: 'center'
// }
// const title = React.createElement(
//     'h1',
//     {id:'title', style: style}, 'yesha'
// )

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(title,document.getElementById('root') )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
