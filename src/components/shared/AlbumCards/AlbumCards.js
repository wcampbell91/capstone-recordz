import React from 'react';
import { Link } from 'react-router-dom';

import './AlbumCards.scss';

const AlbumCards = (props) => {
  const { record, deleteRecord } = props;

  const singleRecordLink = `/single/${record.id}`;

  const editLink = `/edit/${record.id}`;

  const deleteEvent = (e) => {
    e.preventDefault();
    deleteRecord(record.id);
  };

  return (
    <div className="card albumCard text-center">
      <img className="card-img-top albumImg" src={record.coverImage} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{record.artist}</h3>
        <h4 className="card-title album-title text-left">{record.album}</h4>
        <Link to={singleRecordLink} className="btn btn-primary viewButton">View Album</Link>
        <Link to={editLink} className=" ml-2 btn btn-primary viewButton"><i className="far fa-lg fa-edit"></i></Link>
        <button className=" ml-2 btn btn-danger deleteButton" onClick={deleteEvent}><i className="fas fa-lg fa-trash-alt"></i></button>
      </div>
    </div>
  );
};

export default AlbumCards;
