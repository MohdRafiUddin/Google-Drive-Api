import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import downReducer from './downReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  down: downReducer,
  upload: uploadReducer
});

export default rootReducer;
