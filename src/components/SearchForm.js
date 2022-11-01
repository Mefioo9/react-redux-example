import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
      <button type="submit">Search shows</button>
    </form>
  )
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}


export default SearchForm