import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PlanItem from './plan_item';
import LoadingCircles from '../ui/loading_circles';


class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.fetchPlans()
      .then(() => this.setState({ loading: false }))
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behaviour: 'smooth' });
  }

  render() {
    if (this.state.loading) {
      return (
        <LoadingCircles />
      );
    } else {
      return (
        <div className='plans-component'>
          <div className='plans-table-title'>
            Submissions
          </div>
          <div className='plans-table-header'>
            <div>Vessel Id</div>
            <div>Container Ids</div>
          </div>
          <table className='plans-table'>
            <tbody>
              {
                this.props.plans.map( (plan, idx) => {
                  return (
                    < PlanItem 
                      key={idx}
                      vesselId={plan.vessel_id}
                      containers={plan.container_ids} />
                    );
                  }
                )
              }
              <tr ref={el => { this.el = el; }}></tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Containers;