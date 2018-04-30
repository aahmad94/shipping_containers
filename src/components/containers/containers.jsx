import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import ContainerItem from './container_item';

class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      containersMap: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    Promise.all([
      this.props.fetchContainers(),
      this.props.fetchVessels()
    ]).then(() => this.setState({ loading: false }));
  }

  handleSelect(containerId, vesselId) {
    const containersMapObj = this.state.containersMap;
    containersMapObj[containerId] = vesselId;
    this.setState({ containersMap: containersMapObj });
  }

  handleSubmit(e) {
    e.preventDefault();

    const payloads = [];
    const vesselsMap = {};
    const containerIds = Object.keys(this.state.containersMap).map(id => parseInt(id));
    const vesselIds = Object.values(this.state.containersMap).map(id => parseInt(id));
    const uniqVesselIds = new Set();
    vesselIds.forEach( vesselId => {
      uniqVesselIds.add(vesselId);
      vesselsMap[vesselId] = [];
      } 
    );
    containerIds.forEach( containerId => {
      const shippingVesselId = this.state.containersMap[containerId];
      vesselsMap[shippingVesselId].push(containerId);
    });

    uniqVesselIds.forEach( vesselId => {
      payloads.push(
        {
          "vessel_id": vesselId,
          "container_ids": vesselsMap[vesselId]
        }
      );
    });

    Promise.all(payloads.map( payload => this.props.createPlan(payload)))
      .then(this.props.removeContainers(containerIds), err => console.log(err));
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
        <form className='containers-form'> 
          <div className='containers-table-header'>
            <div className = 'cth-id'>Id</div>
            <div className='cth-number'>Container #</div>
            <div className='cth-vessel'>Vessel</div>
          </div>
          <table className='containers-table'>
            <tbody>
              { 
                this.props.containers.map(
                  (container) => {
                    return (
                      < ContainerItem 
                      key={container.id}
                      id={container.id}
                      containerNumber={container.container_number}
                      vessels={this.props.vessels} 
                      handleSelect={ (containerId, vesselId) => 
                        this.handleSelect(containerId, vesselId) } 
                        />
                      );
                    }
                  )
                }     
              </tbody>     
          </table>
          <button className='containers-form-btn' 
                  onClick={ this.handleSubmit }>
            Submit
          </button>
        </form>
      );
    }
  }
}

export default Containers;