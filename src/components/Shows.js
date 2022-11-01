import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {searchShows} from '../actions/shows'

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import SearchHistory from './SearchHistory';

const Shows = ({searchShows, shows}) => {
  return (
    <div>
      <h1>Shows</h1>
      <SearchForm handleSearch={searchShows}/>
      <SearchHistory history={shows.history}/>
      {shows.error && (<h3>Some error occurred!</h3>)}
      {shows.loading ? (
        <h3>Loading...</h3>
      ) : (
        <SearchResults results={shows.data}/>
      )}
    </div>
  )
}

Shows.propTypes = {
  searchShows: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  shows: state.shows,
})


export default connect(mapStateToProps, {searchShows})(Shows)