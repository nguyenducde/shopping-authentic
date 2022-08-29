import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/sass/index.scss'
import { Provider } from 'react-redux'
import store from './redux/store/index'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
