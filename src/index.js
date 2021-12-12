import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import store from './redux/store'
import Tunings from './components/Tunings'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/tunings' element={<Tunings />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
