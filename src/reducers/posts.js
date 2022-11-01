import { GET_POSTS, GET_POSTS_ERROR } from '../actions/types'

const initialState ={
  loading: true,
  data: []
}

const postsReducer = (state = initialState, action) => {

  switch(action.type){
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        data: null
      }
    default:
      return state;
  }
}

export default postsReducer;