import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return <li><a href="#">Checking Status..</a></li>;
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
           className="left brand-logo logo">
           <img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_light_color_112x36dp.png" /><span>Drive</span>
         </Link>
         <ul className="right right-items">
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
