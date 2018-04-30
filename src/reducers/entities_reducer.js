import { combineReducers } from 'redux';

import containersReducer from './entities/containers_reducer';
import vesselsReducer from './entities/vessels_reducer';
import plansReducer from './entities/plans_reducer';

const entitiesReducer = combineReducers({
  containers: containersReducer,
  vessels: vesselsReducer,
  plans: plansReducer
});

export default entitiesReducer;
