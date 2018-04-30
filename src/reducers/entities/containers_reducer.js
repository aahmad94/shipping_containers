import { merge } from 'lodash';

import {
  RECEIVE_CONTAINERS,
  REMOVE_CONTAINERS
} from '../../actions/containers/containers_actions';


const initialState = {};

const containersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTAINERS:
      return action.containers.data;
    case REMOVE_CONTAINERS:
      const copyState = merge([], state);
      const newState = [];
      for (let i = 0; i < copyState.length; i++) {
        const curr = copyState[i];
        if (action.containerIds.includes(curr.id)) {
          continue;
        } else {
          newState.push(curr);
        }
      }
      return newState;
    default:
      return state;
  }
};

export default containersReducer;
