import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VesselItem from './vessel_item';

class Vessels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.fetchVessels()
      .then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          Loading
        </div>
      );
    } else {
      return (
        <div className="vessels-list">
          {
            this.props.vessels.map(
              (vessel) => {
                return (
                  <select>
                    <option value={vessel.name}>
                l    < VesselItem
                        key={vessel.id}
                        id={vessel.id}
                        name={vessel.name} />
                      </option>
                  </select>
                );
              }
            )
          }
        </div>
      );
    }
  }
}

export default Vessels;