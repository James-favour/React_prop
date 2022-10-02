import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Vaca from './Vaca';
import './App.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Vaca />
  </React.StrictMode>
);

