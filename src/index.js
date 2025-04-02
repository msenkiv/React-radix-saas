import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import './index.css';
import Home from './Home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reagentes from './Reagentes';
import Estoque from './Estoque';
import Rastreabilidade from './Rastreabilidade';
import Temperatura from './Temperatura'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Theme accentColor="blue" grayColor="sand" scaling="110%">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path='/reagentes' element={<Reagentes></Reagentes>} />
        <Route path='/estoque' element={<Estoque></Estoque>} />
        <Route path='/rastreabilidade' element={<Rastreabilidade></Rastreabilidade>} />
        <Route path='/temperatura' element={<Temperatura></Temperatura>} />

      </Routes>
    </BrowserRouter>
  </Theme>
</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
