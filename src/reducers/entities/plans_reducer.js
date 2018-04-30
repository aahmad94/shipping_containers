import { merge } from 'lodash';

import {
  FETCH_PLANS, CREATE_PLAN
} from '../../actions/plans/plans_actions';

const initialState = [];

const plansReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_PLANS:
      return action.vesselPlans.data;
    case CREATE_PLAN:
      const newState = merge([], state);
      const vesselPlan = action.vesselPlan.data;
      const vesselId = vesselPlan.vessel_id;
      const vesselContainers = vesselPlan.container_ids;
      newState.push({
        "vessel_id": vesselId,
        "container_ids": vesselContainers
      });
      return newState;
    default:
      return state;
  }
};

export default plansReducer;
