import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
      <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
