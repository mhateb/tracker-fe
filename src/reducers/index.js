import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { packsReducer } from './packsReducer';
import { trainingReducer } from './trainingReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: userReducer,
  packs: packsReducer,
  form: formReducer,
  training: trainingReducer
})
