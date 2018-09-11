import _ from 'lodash';
import { FETCH_DATA } from '../actions/types.js';

export default function(state= {}, action){
  switch(action.type){
    case FETCH_DATA:
         return _.mapKeys(action.payload, 'id');
    default:
         return state;
  }
}
