import React from 'react';

function MovieItem({ movie }) {
  const { title, image, language, country, genre } = movie;

  return (
    <div className="movie-item">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Language: {language}</p>
      <p>Country: {country}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default MovieItem;
