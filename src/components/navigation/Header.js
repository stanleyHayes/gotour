import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../App.css';
import { connect, useDispatch } from 'react-redux';
import { signOutRequest } from '../../redux/authentication/authenticationActionCreators';
import { makeStyles } from '@material-ui/styles';

function Header({ currentUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleLogout(event) {
    event.preventDefault();
    dispatch(signOutRequest());
    history.push('/login');
  }

  const useSyles = makeStyles({
    link: {
      cursor: 'pointer',
    },
  });

  const classes = useSyles();

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="grey darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/">
                <img
                  alt=""
                  className="brand-logo"
                  src={`${process.env.PUBLIC_URL}/images/GoTour_logo.png`}
                />
              </Link>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/discovery">
                    <span className="yellow-text text-accent-3">Discovery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <span className="yellow-text text-accent-3">Profile</span>
                  </Link>
                </li>

                {currentUser ? (
                  <li>
                    <span
                      onClick={handleLogout}
                      className={`yellow-text text-accent-3 ${classes.link}`}
                    >
                      Logout
                    </span>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">
                      <span className="yellow-text text-accent-3">Login</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <Link to="/discovery">Discovery</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { currentUser: state.authentication.currentUser };
}

export default connect(mapStateToProps)(Header);
