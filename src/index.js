import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Sample from './components/Sample'
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/sample' element={<Sample />} />

          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
