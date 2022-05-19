import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App, Listen, SeasonOne } from './App';


function MyRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Listen" element={<Listen />} />
      <Route path="/SeasonOne" element={<SeasonOne />} />
    </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);


