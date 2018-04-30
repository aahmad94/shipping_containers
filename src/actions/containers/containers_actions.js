import * as ContainerUtils from './containers_utils';

export const RECEIVE_CONTAINERS = "RECEIVE_CONTAINERS";
export const REMOVE_CONTAINERS = "REMOVE_CONTAINERS"

export const receiveContainers = containers => ({
  type: RECEIVE_CONTAINERS,
  containers
});

export const removeContainers = containerIds => ({
  type: REMOVE_CONTAINERS,
  containerIds
});

export const fetchContainers = () => dispatch => (
  ContainerUtils.fetchContainers()
    .then( containers => dispatch(receiveContainers(containers)))
);