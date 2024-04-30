import React from 'react';

function Filter({ movies, onFilterChange }) {
  const getUniqueValues = (key) => {
    const uniqueValues = new Set();
    movies.forEach(movie => uniqueValues.add(movie[key]));
    return ['All', ...Array.from(uniqueValues)];
  };

  return (
    <div className="filter">
      <label>
        Language:
        <select onChange={(e) => onFilterChange('language', e.target.value)}>
          {getUniqueValues('language').map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </label>
      <label>
        Country:
        <select onChange={(e) => onFilterChange('country', e.target.value)}>
          {getUniqueValues('country').map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </label>
      <label>
        Genre:
        <select onChange={(e) => onFilterChange('genre', e.target.value)}>
          {getUniqueValues('genre').map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Filter;
