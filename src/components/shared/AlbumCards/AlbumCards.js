import React from 'react';
import { Link } from 'react-router-dom';

import './AlbumCards.scss';

const AlbumCards = (props) => {
  const { record } = props;

  const singleRecordLink = `/single/${record.id}`;

  return (
    <div className="card albumCard text-center">
      <img className="card-img-top albumImg" src={record.coverImage} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{record.artist}</h3>
        <h4 className="card-title album-title text-left">{record.album}</h4>
        <Link to={singleRecordLink}className="btn btn-primary viewButton">View Album</Link>
      </div>
    </div>
  );
};

export default AlbumCards;
