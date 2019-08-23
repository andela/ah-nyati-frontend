import React from 'react';
import { Link } from 'react-router-dom';
import './CommentsBtn.scss';

const commentBtn = () => (
  <Link to="/comments" className="linky">
    <div className="com-btn">
      View comments
    </div>
  </Link>
);

export default commentBtn;
