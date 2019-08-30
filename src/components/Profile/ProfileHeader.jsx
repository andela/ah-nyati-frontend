import React from 'react';
import propTypes from 'prop-types';
import './profile.scss';

const avatar = 'https://res.cloudinary.com/phembarl/image/upload/v1567166355/avartar3_clrio9.png';


const ProfileHeader = ({
  profile: {
    firstName, lastName, userName, imageUrl,
  }, articlesLength,
}) => (
  <div>
    <div className="col-sm-12 col-md-8 bg-white text-dark centering">
      <div className="row pp">
        <div className="col-3">
          <img src={imageUrl === 'image.png' || '' ? avatar : imageUrl} alt="" className="profilePics" />
        </div>
        <div className="col-9 top-left">
          <div className="profile-tag">
            <h3 className="title">{`${firstName} ${lastName}`}</h3>
            <h3 className="follow-button">Follow</h3>
          </div>
          <p>{`@${userName}`}</p>
        </div>
      </div>
      <div className="row coco text-center top margin-right-15">
        <div className="col-4">
        followers
          <p>137</p>
        </div>
        <div className="col-4">
        following
          <p>60</p>
        </div>
        <div className="col-4">
        articles
          <p>{articlesLength}</p>
        </div>
      </div>
    </div>
  </div>
);

ProfileHeader.propTypes = {
  profile: propTypes.objectOf(propTypes.any).isRequired,
  articlesLength: propTypes.any,
};
export default ProfileHeader;
