import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Dashboard extends Component {
  renderData() {
    return _.map(this.props.data, data => {
    return ( <li className="list-group-item" key={data.id}>
        {data.name}
      </li>
      );
    });
  }

 render(){
  return (
    <div>
    <h4>List Of Files</h4>
     <ul className="list-group">
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
