import React from 'react'
import PropTypes from 'prop-types'

const SearchResults = ({results}) => {
  if (!results || !results.length) return null;

  return (
    <div>
      {results.map((show) => (
        <div key={show.id}>
          <h5>{show.name} - {show.url}</h5>
          <p>{show.summary}</p>
        </div>
      ))}
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })),
}

export default SearchResults