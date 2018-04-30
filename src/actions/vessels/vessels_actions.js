import * as VesselsUtils from './vessels_utils';

export const RECEIVE_VESSELS = "RECEIVE_VESSELS";

const receiveVessels = vessels => ({
  type: RECEIVE_VESSELS,
  vessels
});

export const fetchVessels = () => dispatch => (
  VesselsUtils.fetchVessels()
    .then( vessels => dispatch(receiveVessels(vessels)))
);

