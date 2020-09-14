import React, { useEffect, useState } from 'react';

import collectionData from '../../../helpers/data/collectionData';

import './SingleAlbum.scss';

const SingleAlbum = (props) => {
  const [record, setRecord] = useState({});

  useEffect(() => {
    const { recordId } = props.match.params;
    collectionData.getCollectionById(recordId)
      .then((res) => setRecord(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (

  <div className="card flip-card singleAlbumCard">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="card-img singleAlbumImg" src={record.coverImage} alt={record.album} />
        <div className="card-img-overlay">
          <div className="info">
            <h3 className="card-title">{record.artist}</h3>
            <h4 className="card-text album-title">{record.album}</h4>
          </div>
          <div className="infoBtn">
            <button className="btn btn-danger">View More Info</button>
          </div>
        </div>
      </div>
      <div className="flip-card-back">
        <h3>{record.artist}</h3>
        <h3>{record.album}</h3>
        <h3>{record.genre}</h3>
      </div>
    </div>
  </div>
  );
};

export default SingleAlbum;
