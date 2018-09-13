import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

class Dashboard extends Component {
  handleClick = (event, data) => {
    this.props.download(data.id, this.props.auth.driveID);
  }
  renderData() {
    return _.map(this.props.data, data => {
    return (
      <div key={data.id}>
        <li className="list-group-item">
        {data.name}
        <a href={`https://www.drive.google.com/open?id=${data.id}`} target='_blank'>Open</a>
        <a href="#" id={data.id} onClick={ event => this.handleClick(event, data) }>Download</a>
        </li>
      </div>
      );
    });
  }

 render(){
  return (
    <div className="dash-container">
    <h4>List Of Files</h4>
     <ul className="list-group col-md-10">
       {this.renderData()}
     </ul>
    </div>
  );
 }
}
function mapStateToProps({ data, auth }) {
  return { data, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
