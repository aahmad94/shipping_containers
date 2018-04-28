import { combineReducers } from 'redux';

import containersReducer from './entities/containers_reducer';
import vesselsReducer from './entities/vessels_reducer';

const entitiesReducer = combineReducers({
  containers: containersReducer,
  vessels: vesselsReducer
});

export default entitiesReducer;
