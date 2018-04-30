import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import ContainerItem from './container_item';
import LoadingCircles from '../ui/loading_circles';


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
        <LoadingCircles />
      ); 
    } else {
      return (
        <form className='containers-form'> 
          <div className='containers-table-title'>Allocate Containers</div>
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