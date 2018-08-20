import { combineReducers } 	from 'redux';
import start 				from './start';

import messages 			from './messages';
import validate 			from './validate';

import endpoint from '../../config/endpoint.js'

export default combineReducers({
  start,
  messages,
  validate,
  endpoint
});

