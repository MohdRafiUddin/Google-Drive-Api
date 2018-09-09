import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path exact ="/" component={Landing} />
        <Route path ="/Dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
