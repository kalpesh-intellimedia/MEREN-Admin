import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/assets/vendors/mdi/css/materialdesignicons.min.css';
import '../public/assets/vendors/css/vendor.bundle.base.css';
import '../public/assets/css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
