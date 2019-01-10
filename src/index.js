import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
    <Provider store={store}>
        <div className="App">
        <div className="container">
          <div className="row">
            <App/>
          </div>
        </div>
      </div>
    </Provider>
    , document.getElementById('root'));
