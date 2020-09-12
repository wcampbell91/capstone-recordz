import React from 'react';

import './AlbumCards.scss';

const AlbumCards = (props) => {
  const { record } = props;

  return (
    <div className="card">
      <img className="card-img-top" src={record.coverImage} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title">{record.artist}</h3>
        <h4 className="card-title album-title">{record.album}</h4>
        <button className="btn btn-primary">View Album</button>
      </div>
    </div>
  );
};

export default AlbumCards;
