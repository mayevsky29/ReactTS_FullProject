import React from 'react';
import './App.css';
  // Маршрути
import { BrowserRouter, Routes, Route, Outlet, Link } 
  from 'react-router-dom';
  // Components
import LoginPage from './components/auth/Login';
import NoMatch from './components/NoMatch';
import HomePage from './components/Home';
import DefaultLayout from './components/containers/DefaultLayout';
import RegisterPage from './components/auth/Register/index';
import AddCar from './components/Auto/Create';
import ProductsListPage from './components/products/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={< LoginPage/>} />
          <Route path="register" element={< RegisterPage/>} />
          <Route path="products" element={<ProductsListPage/>} />
          <Route path="/auto/Create" element={< AddCar/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
