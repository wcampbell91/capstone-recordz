import React from 'react';

import './AlbumCards.scss';

const AlbumCards = (props) => {
  const { record } = props;

  return (
    <div class="card">
      <img class="card-img-top" src={record.coverImage} alt="Album Cover" />
      <div class="card-body">
        <h3 class="card-title">{record.artist}</h3>
        <h4 class="card-title">{record.album}</h4>
        <button className="btn btn-primary">View Album</button>
      </div>
    </div>
  );
};

export default AlbumCards;
