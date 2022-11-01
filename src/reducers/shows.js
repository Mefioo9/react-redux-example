import {SEARCH_SHOWS, SEARCH_SHOWS_FINNISH, SEARCH_SHOWS_ERROR } from '../actions/types'

const initialState ={
  loading: false,
  error: false,
  history: [],
  data: []
}

const showsReducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_SHOWS:
      return {
        ...state,
        loading: true,
        error: false,
        history: [...state.history, action.payload.searchTerm],
        data: []
      }
    case SEARCH_SHOWS_FINNISH:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case SEARCH_SHOWS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      }
    default:
      return state;
  }
}

export default showsReducer;