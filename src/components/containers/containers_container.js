import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchContainers } from './../../actions/containers/containers_actions';
import { fetchVessels } from './../../actions/vessels/vessels_actions';
import Containers from './containers';

const mapStateToProps = (state, ownProps) => ({
  containers: state.entities.containers, 
  vessels: state.entities.vessels
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContainers: () => dispatch(fetchContainers()),
    fetchVessels: () => dispatch(fetchVessels()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Containers));
