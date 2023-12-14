import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Navbar from './components/navbar/Navbar'
import Naws from './components/news/News'

const App = () => {
  return (
    <div>
      <Routes>
        <Route key="Login" path="/" element={<Login />} />
        <Route key="register" path="/register" element={<Registration />} />
        <Route key="Login" path="/login" element={<Login />} />

        <Route key="News" path="/News" element={
        <>
        <Navbar />
        <Naws />
        </>
        } />


        </Routes>
    </div>
  );
};

export default App;
