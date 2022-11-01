import React from 'react'
import PropTypes from 'prop-types'

const SearchHistory = ({history}) => {
  if (!history || !history.length) return null;

  return (
    <ul>
      {history.slice(0, 5).map((searchTerm, index) => (
        <li key={index}>{searchTerm}</li>
      ))}
    </ul>
  )
}

SearchHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
}

export default SearchHistory