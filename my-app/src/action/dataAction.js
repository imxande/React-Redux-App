import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
// async action creator
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(' https://api.nasa.gov/insight_weather/?api_key=dvYTELGzoid9GWDtlniSsrCIEbesDqen7iRX6nUd&feedtype=json&ver=1.0')
    .then(response => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.response });
    });
};
