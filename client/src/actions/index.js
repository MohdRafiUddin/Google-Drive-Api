import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_DATA } from './types';
import { FETCH_RESULT } from './types';

export const fetchUser = () => {
   return function(dispatch) {
      axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
    }
}

export const fetchData = () => {
  return function(dispatch) {
    axios
    .get('api/current_user')
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data.data}))
  }
}

export const download = id => async dispatch => {
    const data = {"id": id}
    const res = await axios.post('/api/download', data);

    dispatch({ type: FETCH_RESULT, payload: res.data});
}
