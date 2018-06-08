import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import iouReducer from './reducers/iouReducer';
import uomeReducer from './reducers/uomeReducer';
import receiptReducer from './reducers/receiptReducer';

const rootReducer = combineReducers({
  main: reducer,
  ious: iouReducer,
  uomes: uomeReducer,
  receipts: receiptReducer,
  auth: authReducer, 
  form: formReducer
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if(authToken){
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
