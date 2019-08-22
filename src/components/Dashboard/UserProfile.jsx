import React from 'react';
import { connect } from 'react-redux';
import Modali, { useModali } from 'modali';
import PropTypes from 'prop-types';


import EditProfileForm from './EditProfileForm';

const avatar = 'https://res.cloudinary.com/phembarl/image/upload/v1567166355/avartar3_clrio9.png';

export const UserProfile = (props) => {
  const [userProfileModal, toggleUserProfileModal] = useModali({
    animated: true,
    title: 'Edit Profile',
  });

  const {
    userProfile: {
      profile: {
        firstName, lastName, userName, imageUrl, bio,
      },
      followers,
      followees,
      articles,
    },
  } = props;

  return (
    <div className="mt-5">
      <div className="col-sm-12 col-md-8 bg-white text-dark centering">
        <div className="overview">
          <div className="row margin-left-15 padding-top-10">
            <div className="imgConatiner">
              <img
                src={imageUrl === 'image.png' || '' ? avatar : imageUrl}
                alt=""
                className="profilePix"
              />
            </div>

            <div className="ml-2 top-left">
             
              <h3 className="mb-0">{`${firstName} ${lastName}`}</h3>
              <p>{`@${userName}`}</p>
             
            </div>
          </div>
          <button type="button" onClick={toggleUserProfileModal}>Edit profile</button>
          <Modali.Modal {...userProfileModal}>
            <EditProfileForm userdetails={{
              firstName, lastName, userName, imageUrl, bio,
            }}
            />
          </Modali.Modal>
        </div>


        <div className="row margin-left-15 text-center tops margin-right-15">
          <div>
          followers
            <p>{followers.length}</p>
          </div>
          <div>
          following
            <p>{followees.length}</p>
          </div>
          <div>
          articles
            <p>
              {typeof articles === 'string' ? 'N/A' : articles.articleCount}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};


UserProfile.propTypes = {
  editAuthUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({ user: {} }).isRequired,
  userProfile: PropTypes.shape(
    {
      profile: {},
      followers: {},
      followees: {},
      articles: {},
    },
  ).isRequired,
};

const mapStatetoProps = ({ auth, userProfile }) => ({
  auth,
  userProfile,
});

export default connect(mapStatetoProps)(UserProfile);
