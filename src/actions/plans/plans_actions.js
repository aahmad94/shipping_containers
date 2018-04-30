import * as PlansUtils from './plans_utils';

export const CREATE_PLAN = "CREATE_PLAN";
export const FETCH_PLANS = "FETCH_PLANS";

export const receivePlan = vesselPlan => ({
  type: CREATE_PLAN,
  vesselPlan
});

const receivePlans = vesselPlans => ({
  type: FETCH_PLANS,
  vesselPlans
});


export const createPlan = (payload) => dispatch => (
  PlansUtils.createPlan(payload)
  .then( vesselPlan => dispatch(receivePlan(vesselPlan)))
);

export const fetchPlans = () => dispatch => (
  PlansUtils.fetchPlans()
  .then( vesselPlans => dispatch(receivePlans(vesselPlans)))
);