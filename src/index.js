import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Super from '../src/components/MainPage/Super'
import Footer from '../src/components/MainPage/Footer'
import ItemList from '../src/components/MainPage/ItemList'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Super />
    <ItemList/>
    < Footer />

    

  </React.StrictMode>
);


reportWebVitals();
