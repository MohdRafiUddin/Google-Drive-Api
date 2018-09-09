import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return <li>Loading......</li>;
      case false:
        return <li><a href="/auth/google-drive">Login With Google Drive</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render(){
   return (
     <nav>
       <div className="nav-wrapper">
         <Link
           to={ this.props.auth ? '/Dashboard' : '/'}
           className="lefdt brand-logo">
           Drive Api
         </Link>
         <ul className="right">
           { this.renderContent() }
         </ul>
       </div>
     </nav>
   );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
