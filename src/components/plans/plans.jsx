import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PlanItem from './plan_item';


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
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>
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