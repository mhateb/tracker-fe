import { combineReducers } from 'redux';
import { 
  userReducer,
  packsReducer
} from './userReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: userReducer,
  packs: packsReducer,
  form: formReducer
})
