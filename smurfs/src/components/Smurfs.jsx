import React, { Component } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/actionCreators'


class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="Smurfs-list-wrapper">
        <h1>Smurf Village</h1>
        <ul>
          {
            this.props.smurfs.map(smurf => (
            <Smurf 
              key={smurf.id}
              smurf={smurf}
              deleteSmurf={this.props.deleteSmurf}
            />
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    smurfs: reducers.smurfs
  }
}


export default connect(
  mapStateToProps,
  { deleteSmurf, getSmurfs },
)(Smurfs);