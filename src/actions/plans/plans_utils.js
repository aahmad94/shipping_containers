import axios from 'axios';

const url = "http://127.0.0.1:8000/vessel_plans";

export const createPlan = (payload) => (
  axios.post(url, payload)
    .then(resp => resp)
);

export const fetchPlans = () => (
  axios.get(url)
    .then(resp => resp)
);