import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Dashboard extends Component {
  renderData() {
    return _.map(this.props.data, data => {
    return (
      <div>
        <li className="list-group-item" key={data.id}>
        {data.name}
        <a href={`https://www.drive.google.com/open?id=${data.id}`} target='_blank'>Open</a>
        <a href="/" target="_blank">Download</a>
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
function mapStateToProps({ data }) {
  return { data };
}
export default connect(mapStateToProps)(Dashboard);
