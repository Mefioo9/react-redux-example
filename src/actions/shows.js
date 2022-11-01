import axios from 'axios'
import {SEARCH_SHOWS, SEARCH_SHOWS_FINNISH, SEARCH_SHOWS_ERROR} from './types';
import {SEARCH_SHOW_URL} from "../constants";


export const searchShows = (searchTerm) => async dispatch => {
  dispatch({
    type: SEARCH_SHOWS,
    payload: { searchTerm }
  })
  try {
    const res = await axios.get(SEARCH_SHOW_URL.replace('{query}', searchTerm));
    dispatch({
      type: SEARCH_SHOWS_FINNISH,
      payload: res.data.map(rawShow => ({ ...rawShow.show }))
    })
  } catch (err) {
    dispatch({
      type: SEARCH_SHOWS_ERROR,
      payload: err
    })
  }
}