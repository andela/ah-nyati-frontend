import React, { useState } from 'react';
import DraftArticles from './DraftArticles';
import PublishedArticles from './PublishedArticles';


export const UserArticles = () => {
  const [showPublished, setShowPublished] = useState(true);

  return (
    <div>
      <div className="tops">

        <div className="col-md-8 centering center-toggle fonts">

          <button type="button" className={showPublished ? 'articlePublished active' : 'articlePublished'} id="published" onClick={() => setShowPublished(true)}> Articles </button>
          {' '}
          |
          <button type="button" className={!showPublished ? 'articleDraft active' : 'articleDraft'} id="draft" onClick={() => setShowPublished(false)}>Drafts</button>

        </div>
        
        { showPublished ? <PublishedArticles /> : <DraftArticles />}
      
      </div>
    </div>
  );
};

export default UserArticles;
