import { FETCH_DOWN } from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    case FETCH_DOWN:
    console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
