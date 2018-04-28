import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import ContainerItem from './container_item';

class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      map: {}
    };
  }

  componentWillMount() {
    Promise.all([
      this.props.fetchContainers(),
      this.props.fetchVessels()
    ]).then(() => this.setState({ loading: false }));
  }

  handleSelect(containerId, vesselId) {
    console.log({ map: this.state.map });
    const mapObj = _.merge({}, this.state.map);
    mapObj[containerId] = vesselId;
    this.setState({ map: mapObj });
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
        <div className="containers-list">
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
        </div>
      );
    }
  }
}

export default Containers;