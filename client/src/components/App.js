import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
     this.props.fetchUser();
     this.props.fetchData();
  }
  render(){
   return (
     <BrowserRouter >
       <div>
         <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/Dashboard" component={Dashboard} />
       </div>
     </BrowserRouter>
   );
 }
}

export default connect(null, actions)(App);
