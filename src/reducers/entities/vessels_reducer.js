import {
  RECEIVE_VESSELS
} from '../../actions/vessels/vessels_actions';

const initialState = {};

const vesselsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VESSELS:
      return action.vessels.data;
    default:
      return state;
  }
};

export default vesselsReducer;
