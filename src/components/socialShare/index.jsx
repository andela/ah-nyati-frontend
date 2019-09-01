import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareCount,

  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import './index.scss';


export default function socialShare({ article }) {
  const shareUrl = window.location.href;
  const { title } = article;
  return (
    <div className="mt-4 mb-4">
      <div className="social-share">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="social-share__share-button"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </div>

      <div className="social-share">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="social-share__share-button"
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>

        <div className="social-share__share-count">
          &nbsp;
        </div>
      </div>

      <div className="social-share">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="social-share__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <div className="social-share__share-count">
          &nbsp;
        </div>
      </div>

      <div className="social-share">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="social-share__share-button"
        >
          <EmailIcon
            size={32}
            round
          />
        </EmailShareButton>
      </div>
    </div>
  );
}

socialShare.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
