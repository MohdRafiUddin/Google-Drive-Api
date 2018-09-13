import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_DATA } from './types';
import { FETCH_RESULT } from './types';

export const fetchUser = () => async dispatch {
      const res = await axios.get('/api/current_user');
      dispatch({ type: FETCH_USER, payload: res.data });
    }

export const fetchData = () => async dispatch {
    const res = await axios.get('api/current_user');
    dispatch({ type: FETCH_DATA, payload: res.data.data})
  }

export const download = (id, driveID) => async dispatch => {
    const data = { "id": id, "driveID": driveID }
    const res = await axios.post('/api/download', data);

    dispatch({ type: FETCH_RESULT, payload: res.data});
}
