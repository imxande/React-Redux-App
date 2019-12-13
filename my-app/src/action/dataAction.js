import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get( 'https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.results });
    })
    .catch(error => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.response });
    });
};
