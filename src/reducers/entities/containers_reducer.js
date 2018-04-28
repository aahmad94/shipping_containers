import {
  RECEIVE_CONTAINERS
} from '../../actions/containers/containers_actions';

const initialState = {};

const containersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTAINERS:
      return action.containers.data;
    default:
      return state;
  }
};

export default containersReducer;
