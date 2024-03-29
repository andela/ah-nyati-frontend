import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getUser from '../../actions/getUserAction';
import { logoutUser } from '../../actions/authActions';
import '../../variables.scss';
import './index.scss';

export class Navbar extends React.Component {
  state = {
    open: false,
    dropdown: false,
    notification: false,
    width: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();

    const { user } = this.props;
    if (Object.keys(user).length !== 0) {
      const {
        payload: {
          userName,
        },
      } = user;
      this.props.getUser(userName);
    }
  }

  logOut = () => {
    const { logoutUser, history } = this.props;
    logoutUser(history);
  }

  componentDidUpdate(prevProps) {
    const { authUser: { userName } } = this.props;
    if (userName && (prevProps.authUser.userName !== userName)) {
      this.props.getUser(userName);
    }
  }

  resize = () => {
    this.setState({ width: window.innerWidth <= 660 });
  }

  openNavbar = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  dropDown = () => {
    const { dropdown } = this.state;
    this.setState({
      dropdown: !dropdown,
      notification: false,
    });
  };

  close = () => {
    this.setState({
      open: false,
    });
  };

  notificationFunc = () => {
    const { notification } = this.state;
    this.setState({
      dropdown: false,
      notification: !notification,
    });
  };

  checkWidth = (trueArg, falseArg) => {
    const { width } = this.state;

    const data = width ? trueArg : falseArg;
    return data;
  }

  toggleDropdown = (trueArg, falseArg) => {
    const { dropdown } = this.state;

    const data = dropdown ? trueArg : falseArg;
    return data;
  }

  render() {
    const {
      open,
      notification,
    } = this.state;

    const { authUser : {userName, imageUrl }, authUser } = this.props;

    const article = this.checkWidth(<i className="fas fa-book-reader" />, 'Articles');
    const notify = this.checkWidth(<i className="fas fa-bell" />, 'Notifications');
    const currentUser = authUser;
    return (
      <nav className="navbar navbar-sides">
        <div className="navbar-logo">
          <svg width="80" height="50" viewBox="0 0 100 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M22.35 64.93C22.35 65.93 29.56 66.82 38.45 66.82C47.34 66.82 54.55 65.97 54.55 64.93C54.55 63.89 47.34 63 38.45 63C29.56 63 22.35 63.88 22.35 64.93Z" fill="#020202" />
            <path d="M49.2 64.29C47.858 64.29 46.571 63.7569 45.622 62.808C44.6731 61.859 44.14 60.572 44.14 59.23V31.4C44.14 30.058 43.6069 28.771 42.658 27.822C41.709 26.8731 40.422 26.34 39.08 26.34H21.37C22.712 26.34 23.999 26.8731 24.948 27.822C25.8969 28.771 26.43 30.058 26.43 31.4V59.23C26.43 60.572 26.9631 61.859 27.912 62.808C28.861 63.7569 30.148 64.29 31.49 64.29H49.2Z" fill="#FFF5E3" />
            <path d="M26.43 31.4C26.43 30.058 25.8969 28.771 24.948 27.822C23.999 26.8731 22.712 26.34 21.37 26.34C20.028 26.34 18.741 26.8731 17.792 27.822C16.8431 28.771 16.31 30.058 16.31 31.4V37.21C16.31 37.515 16.4312 37.8075 16.6468 38.0232C16.8625 38.2388 17.155 38.36 17.46 38.36H26.46L26.43 31.4Z" fill="#F7E5C6" stroke="#45413C" strokeLinejoin="round" />
            <path d="M23.9 26.34H39.08C40.0905 26.3325 41.0796 26.6315 41.9168 27.1974C42.754 27.7633 43.4002 28.5696 43.77 29.51H26.06C25.6364 28.4708 24.8756 27.6044 23.9 27.05V26.34Z" fill="white" />
            <path d="M49.2 64.29C47.858 64.29 46.571 63.7569 45.622 62.808C44.6731 61.859 44.14 60.572 44.14 59.23V31.4C44.14 30.058 43.6069 28.771 42.658 27.822C41.709 26.8731 40.422 26.34 39.08 26.34H21.37C22.712 26.34 23.999 26.8731 24.948 27.822C25.8969 28.771 26.43 30.058 26.43 31.4V59.23C26.43 60.572 26.9631 61.859 27.912 62.808C28.861 63.7569 30.148 64.29 31.49 64.29H49.2Z" stroke="#45413C" strokeLinejoin="round" />
            <path d="M49.2 64.29C49.9032 64.2865 50.598 64.1362 51.2397 63.8486C51.8815 63.5611 52.4561 63.1427 52.9268 62.6202C53.3975 62.0977 53.7539 61.4827 53.9731 60.8145C54.1924 60.1464 54.2696 59.4398 54.2 58.74C54.0433 57.4736 53.4273 56.3088 52.4688 55.4665C51.5103 54.6241 50.276 54.1628 49 54.17H34.9C34.7891 54.181 34.6838 54.2236 34.5965 54.2929C34.5092 54.3621 34.4438 54.455 34.4079 54.5605C34.372 54.666 34.3673 54.7795 34.3943 54.8876C34.4213 54.9957 34.4788 55.0937 34.56 55.17C35.4004 55.8124 36.0183 56.702 36.3269 57.7138C36.6355 58.7256 36.6193 59.8086 36.2805 60.8107C35.9417 61.8127 35.2973 62.6834 34.4381 63.3004C33.5788 63.9173 32.5478 64.2494 31.49 64.25L49.2 64.29Z" fill="white" stroke="#45413C" strokeLinejoin="round" />
            <path d="M40.35 33.93H30.86" stroke="#45413C" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.35 37.73H30.86" stroke="#45413C" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.68 41.52H33.62" stroke="#45413C" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.68 45.32H34.89" stroke="#45413C" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55.09 39.16L49.73 33.79L54.2 27.53L61.35 34.69L55.09 39.16Z" fill="#525252" />
            <path d="M54.2 27.53L49.73 33.79L52.8 36.86L58.16 31.49L54.2 27.53Z" fill="#656769" />
            <path d="M61.36 34.69L54.2 27.53L74.43 9.69C75.132 9.06372 76.0482 8.73179 76.9884 8.76311C77.9287 8.79443 78.8207 9.1866 79.4795 9.85822C80.1382 10.5298 80.5131 11.4293 80.5262 12.37C80.5393 13.3107 80.1898 14.2203 79.55 14.91L61.36 34.69Z" fill="#525252" />
            <path d="M79.44 9.84C78.7824 9.18301 77.8989 8.80168 76.9697 8.77381C76.0406 8.74593 75.1358 9.07361 74.44 9.69L54.2 27.53L58.2 31.53L79.62 10.05C79.56 10 79.51 9.91 79.44 9.84Z" fill="#656769" />
            <path d="M48.56 46.23C48.2443 46.6523 47.8357 46.9965 47.3658 47.2357C46.8959 47.475 46.3773 47.6031 45.85 47.61C44.17 47.61 41.57 47.87 39.85 49C40.97 47.31 41.21 44.72 41.23 43C41.2389 42.472 41.3688 41.9531 41.6098 41.4833C41.8508 41.0135 42.1964 40.6052 42.62 40.29L48.39 36L52.86 40.47L48.56 46.23Z" fill="#FFE500" />
            <path d="M48.39 36L42.66 40.3C42.2377 40.6142 41.8929 41.0208 41.6519 41.4888C41.411 41.9568 41.2804 42.4737 41.27 43C41.27 44.68 41.01 47.27 39.89 49L50.62 38.26L48.39 36Z" fill="#FFF48C" />
            <path d="M52.86 40.5L48.38 36.03L49.73 33.79L55.09 39.16L52.86 40.5Z" fill="#FFE500" stroke="#45413C" strokeLinejoin="round" />
            <path d="M48.56 46.23C48.2443 46.6523 47.8357 46.9965 47.3658 47.2357C46.8959 47.475 46.3773 47.6031 45.85 47.61C44.17 47.61 41.57 47.87 39.85 49C40.97 47.31 41.21 44.72 41.23 43C41.2389 42.472 41.3688 41.9532 41.6098 41.4833C41.8508 41.0135 42.1964 40.6052 42.62 40.29L48.39 36L52.86 40.47L48.56 46.23Z" stroke="#45413C" strokeLinejoin="round" />
            <path d="M55.09 39.16L49.73 33.79L54.2 27.53L61.35 34.69L55.09 39.16Z" stroke="#45413C" strokeLinejoin="round" />
            <path d="M46.6 44.08C46.3621 44.3163 46.0403 44.449 45.705 44.449C45.3697 44.449 45.0479 44.3163 44.81 44.08C44.6918 43.9629 44.5979 43.8234 44.5339 43.6698C44.4699 43.5162 44.4369 43.3514 44.4369 43.185C44.4369 43.0186 44.4699 42.8538 44.5339 42.7002C44.5979 42.5466 44.6918 42.4071 44.81 42.29C45.0532 42.0838 45.3649 41.9766 45.6835 41.9897C46.002 42.0028 46.3039 42.1352 46.5294 42.3606C46.7548 42.5861 46.8872 42.888 46.9003 43.2065C46.9134 43.5251 46.8062 43.8369 46.6 44.08V44.08Z" stroke="#45413C" strokeLinejoin="round" />
            <path d="M44.81 44.08L40.34 48.55" stroke="#45413C" strokeLinejoin="round" />
            <path d="M78.07 16.52L78.88 17.32C79.3397 17.7818 79.6044 18.4026 79.6193 19.054C79.6342 19.7055 79.3982 20.3377 78.96 20.82L71.19 29.32" stroke="#45413C" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M56.1 25.85L54.2 27.53L61.35 34.69L63.07 32.82L56.1 25.85Z" fill="#FFE500" stroke="#45413C" strokeLinejoin="round" />
            <path d="M61.36 34.69L54.2 27.53L74.43 9.69C75.132 9.06372 76.0482 8.73179 76.9884 8.76311C77.9287 8.79443 78.8207 9.1866 79.4795 9.85822C80.1382 10.5298 80.5131 11.4293 80.5262 12.37C80.5393 13.3107 80.1898 14.2203 79.55 14.91L61.36 34.69Z" stroke="#45413C" strokeLinejoin="round" />
          </svg>
          <Link to="/" className="navbar-logo__title">
            <span className="navbar-logo-big-title">Authors Haven</span>
            <span className="navbar-logo-small-title">AH</span>
          </Link>
        </div>

        {Object.keys(currentUser).length === 0 ? (
          <span>
            <ul className={open ? 'navbar-menu navbar-menu-active' : 'navbar-menu'}>
              <li onClick={this.close} className="navbar-item"><Link to="/articles" className="navbar-link">Articles</Link></li>
              <li onClick={this.close} className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
              <li onClick={this.close} className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
              <li onClick={this.close} className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
            </ul>
            <div
              className={open ? 'navbar-burger navbar-toggle' : 'navbar-burger'}
              role="button"
              tabIndex="0"
              onClick={this.openNavbar}
            >
              <div className="navbar-burger-line1" />
              <div className="navbar-burger-line2" />
              <div className="navbar-burger-line3" />
            </div>
          </span>
        ) : (
          <div className="navbar-login">
            <ul className="navbar-login-menu">
              <li className="navbar-login-item">
                <Link to="/articles" className="navbar-link">
                  { article }
                </Link>
              </li>
              <li
                className="navbar-login-item navbar-notification"
                role="button"
                tabIndex="0"
                onBlur={this.notificationFunc}
                onClick={this.notificationFunc}
              >
                { notify }
                <div
                  className={notification ? 'navbar-notification-dropdown navbar-notification-dropdown-active' : 'navbar-notification-dropdown'}
                >
                  <ul
                    className={this.toggleDropdown('navbar-notification-dropdown-menu navbar-notification-dropdown-menu-active', 'navbar-notification-dropdown-menu')}
                  >
                    <p className="navbar-notification-message">Team Nyati followed you</p>
                    <p className="navbar-notification-message">Team Nyati liked your article</p>
                    <p className="navbar-notification-message">Team Nyati commented on your article</p>
                    <p className="navbar-notification-all">View all notifications</p>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="navbar-login-user">
              <div
                role="button"
                tabIndex="0"
                onBlur={this.dropDown}
                onClick={this.dropDown}
              >
                <img src={imageUrl !== null ? imageUrl : 'https://i1.wp.com/www.africanbusinesscentral.com/wp-content/uploads/2018/07/Andela.jpeg'} alt="" />
                <span className="navbar-login-user-username">{userName}</span>
                <i className="fas fa-caret-down" />
              </div>
              <div
                className={this.toggleDropdown('navbar-login-user-dropdown navbar-login-user-dropdown-active', 'navbar-login-user-dropdown')}
              >
                <ul
                  className={this.toggleDropdown('navbar-login-user-dropdown-menu navbar-login-user-dropdown-menu-active', 'navbar-login-user-dropdown-menu')}
                >
                  <li className="navbar-login-user-dropdown-item"><Link to="/article" className="navbar-login-user-dropdown-link">Create Article</Link></li>
                  <li className="navbar-login-user-dropdown-item"><Link to="/articles" className="navbar-login-user-dropdown-link">My Articles</Link></li>
                  <li className="navbar-login-user-dropdown-item"><Link to="/notification" className="navbar-login-user-dropdown-link">Edit Profile</Link></li>
                  <li className="navbar-login-user-dropdown-item">
                    <Link to="/" onClick={this.logOut} className="navbar-login-user-dropdown-link">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

Navbar.propTypes = {
  getUser: PropTypes.func.isRequired,
  loggedInUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loggedInUser: state.user,
  authUser: state.auth.user,
});

export default withRouter(connect(mapStateToProps, { getUser, logoutUser })(Navbar));
