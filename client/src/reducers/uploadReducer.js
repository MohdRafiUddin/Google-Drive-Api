import { FETCH_UPLOAD } from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    case FETCH_UPLOAD:
    console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
