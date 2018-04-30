import * as PlansUtils from './plans_utils';

export const CREATE_PLAN = "CREATE_PLAN";
export const FETCH_PLANS = "FETCH_PLANS";

const receivePlans = vesselPlans => ({
  type: FETCH_PLANS,
  vesselPlans
});

export const createPlan = (payload) => dispatch => (
  PlansUtils.createPlan(payload)
);