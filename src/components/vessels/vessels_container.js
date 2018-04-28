import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVessels } from './../../actions/vessels/vessels_actions';
import Vessels from './vessels';

const mapStateToProps = (state, ownProps) => ({
  vessels: state.entities.vessels
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVessels: () => dispatch(fetchVessels()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Vessels));
