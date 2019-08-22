import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editAuthUserProfile } from '../../actions/userActions';
/**
 * @class EditProfileForm
 * @extends {Component}
 */
export class EditProfileForm extends Component {
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      bio: '',
      avatar: null,
    };

    componentDidMount() {
      this.setState({
        ...this.props.userdetails,
      });
    }

    onImageChange = ({ target }) => {
      this.setState(state => ({
        ...state,
        avatar: target.files[0],
      }));
    }

    onInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    onButtonSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      Object.keys(this.state).forEach(key => formData.append([key], this.state[key]));

      const {
        editAuthUserProfile: updateProfile,
        auth: { user: { id: userId } },
      } = this.props;
      updateProfile(formData, userId);
    }

    
    render() {
      const { userProfile: { isLoading } } = this.props;

      return (
        <div className="cont">
          <form className="edit-form" onSubmit={this.onButtonSubmit}>
            <div className="userForm">
              <div className="form-group">
                <p>Change FirstName:</p>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="userForm">
              <div className="form-group">
                <p>Change LastName:</p>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="userForm">
              <div className="form-group">
                <p>Change UserName:</p>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  id="userName"
                  value={this.state.userName}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="userForm">
              <div className="form-group">
                <p>Edit Bio:</p>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  id="bio"
                  value={this.state.bio}
                  onChange={this.onInputChange}
                />
              </div>
            </div>

            <div className="userForm">
              <div className="form-group">
                <p>Upload new profile image:</p>
                <input
                  type="file"
                  className="form-control"
                  name="avatar"
                  id="imageUrl"
                  onChange={this.onImageChange}
                />
              </div>
            </div>
            <input
              type="submit"
              value={!isLoading ? 'change profile' : 'loading...'}
              id="submit"
              className="btn-block"
            />
          </form>
        </div>
      );
    }
}

EditProfileForm.propTypes = {
  editAuthUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({ user: {} }).isRequired,
  userdetails: PropTypes.shape().isRequired,
  userProfile: PropTypes.shape({ user: {}, isLoading: '' }).isRequired,
};

const mapStatetoProps = ({ auth, userProfile }) => ({
  auth,
  userProfile,
});

export default connect(mapStatetoProps, { editAuthUserProfile })(EditProfileForm);
