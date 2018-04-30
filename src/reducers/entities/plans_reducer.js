import { merge } from 'lodash';

import {
  FETCH_PLANS
} from '../../actions/plans/plans_actions';

const initialState = {};

const plansReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_PLANS:
      const newState = merge({}, state);
      const payload = action.payload;
      const vesselId = Object.keys[payload][0];
      if (newState[vesselId]) {
        newState[vesselId].concat(payload[vesselId]);
      } else {
        newState[vesselId] = payload[vesselId];
      }
      return newState;
    default:
      return state;
  }
};

export default plansReducer;
