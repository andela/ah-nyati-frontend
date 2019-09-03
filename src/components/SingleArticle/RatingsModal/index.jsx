import React from 'react';
import {
  Modal, Button,
} from 'bootstrap-4-react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

/**
 * This component is called RatingsModal component, it renders the ratings modal and also holds
 * the button to close or save ratings.
 */
const RatingsModal = (props) => {
  const {
    title, rating, starClick, handleRatingsSubmit,
  } = props;
  return (
    <Modal.Dialog centered>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <Modal.Close>
            <span aria-hidden="true">&times;</span>
          </Modal.Close>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>
Your current rating for this article is:
              {' '}
              {rating}
              {' '}
stars
            </h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              starColor="#2E99D6"
              onStarClick={starClick}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button secondary data-dismiss="modal">Quit</Button>
          <Button primary data-dismiss="modal" onClick={handleRatingsSubmit}>Save Ratings</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Dialog>
  );
};


RatingsModal.propTypes = {
  title: PropTypes.string.isRequired,
  starClick: PropTypes.func.isRequired,
  handleRatingsSubmit: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RatingsModal;
