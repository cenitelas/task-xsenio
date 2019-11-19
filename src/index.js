import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import createStore from './stores/Store';
import App from './components/App';
import {BrowserRouter as Router, Route} from "react-router-dom"

const store = createStore();

ReactDOM.render(<Provider store={store}>
                    <Router>
                         <Route path="/" component={App}/> 
                     </Router>
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
