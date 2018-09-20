import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_DATA } from './types';
import { FETCH_DOWN } from './types';
import { FETCH_UPLOAD } from './types';

export const fetchUser = () => async dispatch => {
      const res = await axios.get('api/current_user');
      dispatch({ type: FETCH_USER, payload: res.data });
    }

export const fetchData = () => async dispatch => {
    const res = await axios.get('api/current_user/data');
    dispatch({ type: FETCH_DATA, payload: res.data})
  }

export const download = (id, driveID) => async dispatch => {
    const data = {
      "id": id,
      "driveID": driveID
    }
    const res = await axios.post('api/download', data);
    dispatch({ type: FETCH_DOWN, payload: res.data});
}

export const upload = (name, size, type, driveID) => async dispatch => {
    const data = {
      "name": name,
      "size": size,
      "type": type,
      "driveID": driveID
    }
    const res = await axios.post('api/upload', data);
    dispatch({ type: FETCH_UPLOAD, payload: res.data})
}
