import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import collectionData from '../../../helpers/data/collectionData';
import discogsData from '../../../helpers/data/discogsData';

import './SingleAlbum.scss';

const SingleAlbum = (props) => {
  const [record, setRecord] = useState({});
  const [recordDetail, setRecordDetail] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [tracklist, setTracklist] = useState([]);

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
      .then(({ data }) => {
        setRecordDetail(data);
        setTracklist(data.tracklist);
      })
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
        <div className="flip-card-back text-center">
          <div className="recordDetailContainer">
            <div className="backButton">
              <button className="btn btn-danger mb-3 mt-3" onClick={moreInfoEvent}>Back</button>
            </div>
            <div className="detailInfo">
              {recordDetail.artists && recordDetail.artists.length ? <h2>{recordDetail.artists[0].name}</h2> : ''}
              {recordDetail.title ? <h2>{recordDetail.title}</h2> : ''}
              <h2>Release: {recordDetail.year ? recordDetail.year : ''}</h2>
              <h2>Genres: {recordDetail.genres ? recordDetail.genres : ''}</h2>
            </div>
            <div className="tracklist">
              <h2 className="text-left ml-3">Tracklist:</h2>
              <ol className="">
                { tracklist ? tracklist.map((track) => <li className="text-left">{track.title}</li>) : ''}
              </ol>
            </div>
            <div className="discogsLink">
              <a href={recordDetail.uri} className="btn btn-danger mt-4 button">See More at Discogs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleAlbum;
