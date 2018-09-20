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
  renderFolders() {
    return _.map(this.props.data, data => {
      if(data.mimeType === "application/vnd.google-apps.folder"){
        console.log(data);
       return (
        <div key={data.id}>
          <li className="list-group-item">
           <img src="https://cdn0.iconfinder.com/data/icons/iconico-3/1024/63.png" height="30px" width="35px" />{data.name}
           <a href={`https://www.drive.google.com/open?id=${data.id}`} target='_blank'>Open Folder</a>
          </li>
        </div>
       );
      }
    });
  }
  renderFiles() {
    return _.map(this.props.data, data => {
      if(data.mimeType !== "application/vnd.google-apps.folder"){
       return (
        <div key={data.id}>
          <li className="list-group-item">
           <img src="https://procesdoen.nl/wp-content/uploads/text61.png" height="30px" width="35px" /> {data.name}
           <a href={`https://www.drive.google.com/open?id=${data.id}`} target='_blank'>Open File</a>
           <a href="/Dashboard" id={data.id} onClick={ event => this.handleClick(event, data) }>Download</a>
          </li>
        </div>
       );
      }
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
         <div>
           <ul className="list-group col-md-11 gap">
            {this.renderFolders()}
          </ul>
         </div>
         <div>
          <ul className="list-group col-md-11 gap">
            {this.renderFiles()}
           </ul>
         </div>
      </div>
    );
  }
}
function mapStateToProps({ data, auth }) {
  return { data, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
