import { connect } from 'react-redux';

import { removeContainers } from './../../actions/containers/containers_actions';
import { fetchContainers } from './../../actions/containers/containers_actions';
import { fetchVessels } from './../../actions/vessels/vessels_actions';
import { createPlan } from './../../actions/plans/plans_actions';
import Containers from './containers';

const mapStateToProps = (state, ownProps) => ({
  containers: state.entities.containers, 
  vessels: state.entities.vessels
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeContainers: (containerIds) => dispatch(removeContainers(containerIds)),
    fetchContainers: () => dispatch(fetchContainers()),
    fetchVessels: () => dispatch(fetchVessels()),
    createPlan: (payload) => dispatch(createPlan(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
