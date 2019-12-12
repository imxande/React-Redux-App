import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../action';

  const initialState = {
    data: null,
    isFetching: false,
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          joke: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;