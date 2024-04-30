// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data from JSON file
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('movies.json');
      const data = await response.json();
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleFilterChange = (filterType, value) => {
    // Filter movies based on the selected criteria
    let filtered = [...movies];
    if (value !== 'All') {
      filtered = filtered.filter(movie => movie[filterType] === value);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie Catalog</h1>
      <Filter movies={movies} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
