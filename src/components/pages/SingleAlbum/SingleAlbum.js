import React, { useEffect, useState } from 'react';

import collectionData from '../../../helpers/data/collectionData';
import discogsData from '../../../helpers/data/discogsData';

import './SingleAlbum.scss';

const SingleAlbum = (props) => {
  const [record, setRecord] = useState({});
  const [recordDetail, setRecordDetail] = useState({});
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const { recordId } = props.match.params;
    collectionData.getCollectionById(recordId)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const moreInfoEvent = (e) => {
    e.preventDefault();
    discogsData.getAlbumById(record.albumId)
      .then(({ data }) => setRecordDetail(data))
      .catch((err) => console.error(err));
    setFlipped(!flipped);
  };

  const flipClass = flipped ? 'flipper' : '';
  const flipClass2 = flipped ? 'card-img-overlay' : 'card-img-overlay image';
  return (

  <div className={flipClass}>
    <div className="card flip-card singleAlbumCard">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img singleAlbumImg" src={record.coverImage} alt={record.album} />
          <div className={flipClass2}>
            <div className="info">
              <h3 className="card-title">{record.artist}</h3>
              <h4 className="card-text album-title">{record.album}</h4>
            </div>
            <div className="infoBtn">
              <button className="btn btn-danger" onClick={moreInfoEvent}>View More Info</button>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <button className="btn btn-danger" onClick={moreInfoEvent}>Back</button>
          {recordDetail.artists && recordDetail.artists.length ? <h3>{recordDetail.artists[0].name}</h3> : ''}
          {recordDetail.tracklist && recordDetail.tracklist.length ? <ol>{<li>{recordDetail.tracklist[0].title}</li>} </ol> : ''}
          {/* {recordDetail.artists && recordDetail.artists.length ? <h3>{recordDetail.artists[0].name}</h3> : ''} */}
          <button className="btn-btn-danger" onClick={moreInfoEvent}></button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleAlbum;
