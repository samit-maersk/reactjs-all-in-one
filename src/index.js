import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Home from './pages/Home';
import Employee from './pages/Employee';
import Department from './pages/Department';
import NotFound from './pages/NotFound'
import Todo from './pages/Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/department" element={<Department />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
