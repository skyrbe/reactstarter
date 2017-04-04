import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends Component {
  constructor(props)
  {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(e) {
    e.preventDefault();
    let user_id = {
      id:this.props.auth.user.user_id
    }
    this.props.logout(user_id).then(
      () => {
        this.context.router.push('/');
      },
      ({ data }) => this.setState({ errors : data, isLoading : false })
    );
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    const user = this.props.auth.user;
    console.log('path is ' , this.props.pathname);
    const userLinks = (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React Starter</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              { !isAuthenticated && <li>
                <Link
                  to={{
                    pathname: `/`,
                  }}
                >Login</Link>
              </li> }
              { isAuthenticated && <li className="pull-right dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.first_name} {user.last_name} <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#" onClick = {this.logout}>Logout</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li> }
            </ul>
          </div>
        </div>
      </nav>
    );

    const guestLinks = (
      <div></div>
    );

    return (
      <div>
        { (this.props.pathname != '/') ? userLinks : guestLinks }
      </div>
    );
  }
}

NavigationBar.propTypes = {
  auth:React.PropTypes.object.isRequired,
  logout:React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router:React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth:state.auth,
  }
}
export default connect(mapStateToProps, { logout })(NavigationBar);
