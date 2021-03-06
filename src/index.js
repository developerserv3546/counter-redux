import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {Provider} from 'react-redux'
import {createStore} from "redux";
import {reducer} from './store/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

