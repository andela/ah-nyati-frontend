import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userProfiles, userArticles } from '../actions/profileActions';
import Loader from '../components/Loader';
import ProfileItem from '../components/Profile/ProfileHeader';
import Pagination from '../components/Paginate';
import ProfileArticles from '../components/Profile/ProfileArticles';

export class Profiles extends Component {
  componentDidMount() {
    const { match: { params: { userId } } } = this.props;
    if (userId) {
      this.props.userProfiles(userId);
      this.props.userArticles(userId);
    }
  }

  paginate = (data) => {
    const { match: { params: { userId } } } = this.props;
    const currentPage = data.selected;
    const offset = currentPage + 1;
    this.props.userArticles(userId, offset);
  }

  render() {
    const { profiles, loading, profileArticles } = this.props.profile;

    const pag = profileArticles !== null ? profileArticles : { totalPages: 1 };

    let profileContent;

    if (profiles === null || loading) {
      profileContent = <Loader />;
    // check if user is has a profile
    } else if (Object.keys(profiles).length > 0) {
      profileContent = (
        <div className="profile-body">
          <ProfileItem profile={profiles} articlesLength={profileArticles && profileArticles.totalArticles} />
          <ProfileArticles profileArticles={profileArticles} />
          <Pagination article={pag} paginate={this.paginate} />
        </div>
      );
    } else {
      profileContent = <h3>No Profile Found for this user</h3>;
    }
    return (
      <div className="profile-div">
        {profileContent}
      </div>
    );
  }
}

Profiles.defaultProps = {
  match: { },
};

Profiles.propTypes = {
  userProfiles: propTypes.func.isRequired,
  userArticles: propTypes.func.isRequired,
  profile: propTypes.objectOf(propTypes.any).isRequired,
  match: propTypes.objectOf(propTypes.any),
};
export const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { userProfiles, userArticles })(Profiles);
