import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

class Dashboard extends Component {
  state = {
    fileName: null,
    fileSize: null,
    fileType: null
  }

  handleUpload = event => {
    const file = event.target.files[0];
    this.setState({
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    })
  }

  submitUpload = () => {
    this.props.upload(
      this.state.fileName,
      this.state.fileSize,
      this.state.fileType,
      this.props.auth.driveID
    );
  }

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
        <a href="/Dashboard" id={data.id} onClick={ event => this.handleClick(event, data) }>Download</a>
        </li>
      </div>
      );
    });
  }
  renderContent() {
    if(this.props.auth) {
      return (
        <div className="dash-container-heading">
          <h4 className="col-md-5">List Of Files  </h4>
          <div className="dash-container-input">
            <input type="file" onChange={this.handleUpload} />
            <button className="btn btn-primary" onClick={this.submitUpload}>Upload</button>
          </div>
        </div>
      );
    } else {
      return <h1 style={{textAlign:'center'}}>Login Please!!!</h1>
    }
  }

 render(){
  return (
      <div className="dash-container">
       {this.renderContent()}
        <ul className="list-group col-md-11">
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
