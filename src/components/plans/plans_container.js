import { connect } from 'react-redux';
import { fetchPlans } from './../../actions/plans/plans_actions';
import Plans from './plans';

const mapStateToProps = (state, ownProps) => ({
  plans: state.entities.plans,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPlans: () => dispatch(fetchPlans()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plans);