import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>{movie.genre}</p>
            <div className="mt-4">
              {movie.showtimes.map((showtime) => (
                <div key={showtime} className="mt-2">
                  {new Date(showtime).toLocaleString()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
