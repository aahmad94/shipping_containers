import * as ContainerUtils from './containers_utils';

export const RECEIVE_CONTAINERS = "RECEIVE_CONTAINERS";

export const receiveContainers = containers => ({
  type: RECEIVE_CONTAINERS,
  containers
});

export const fetchContainers = () => dispatch => (
  ContainerUtils.fetchContainers()
    .then( containers => dispatch(receiveContainers(containers)))
);