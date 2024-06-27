import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Movie Booking App
        </Link>
        <div>
          <Link to="/login" className="mx-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
            Login
          </Link>
          <Link to="/register" className="mx-2 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
