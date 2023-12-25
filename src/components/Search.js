import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState('');

  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);
  
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search country"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  onHandleSearch: PropTypes.func
};

export default Search;
