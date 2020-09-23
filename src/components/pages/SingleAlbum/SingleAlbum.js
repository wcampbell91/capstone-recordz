import React, { useEffect, useState } from 'react';

import collectionData from '../../../helpers/data/collectionData';
import discogsData from '../../../helpers/data/discogsData';

import './SingleAlbum.scss';

const SingleAlbum = (props) => {
  const [record, setRecord] = useState({});
  const [recordDetail, setRecordDetail] = useState({});
  const [artist, setArtist] = useState({});
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
    discogsData.getArtistById(record.artistId)
      .then(({ data }) => {
        setArtist(data);
      })
      .catch((err) => console.error(err));
    setFlipped(!flipped);
  };

  const flipClass = flipped ? 'flipper container-fluid' : 'container-fluid';
  const flipClass2 = flipped ? 'card-img-overlay' : 'card-img-overlay image';
  const flipClass3 = flipped ? 'card-img-overlay rearImage' : 'card-img-overlay';

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
          <img className="card-img singleAlbumRearImg" src={record.rearCoverImage} alt={record.album} />
          <div className={flipClass3}>
            <div className="recordDetailContainer pl-4 pr-4">
              <div className="backButton">
                <button className="btn btn-danger mb-3 mt-3" onClick={moreInfoEvent}>Back</button>
              </div>
              <div className="artistInfo">
                <div className="artistblah">
                  {artist.name && artist.name.length ? <h2>{artist.name}</h2> : ''}
                  {artist.profile && artist.profile.length ? <h6>{artist.profile}</h6> : ''}
                </div>
              </div>
              <div className="detailInfo text-left pl-4">
                {recordDetail.title ? <h2 className="mt-3">{recordDetail.title}</h2> : ''}
                <h2>Release: {recordDetail.year ? recordDetail.year : ''}</h2>
                <h2>Genres: {recordDetail.genres ? recordDetail.genres : ''}</h2>
                <div className="links text-left">
                  <h2>Links:</h2>
                  <ul>
                    { artist.urls && artist.urls.length ? <li><a className="artistLink url1" href={artist.urls[0]}>{artist.urls[0]}</a></li> : ''}
                    { artist.urls && artist.urls.length ? <li><a className="artistLink url2" href={artist.urls[1]}>{artist.urls[1]}</a></li> : ''}
                    { artist.urls && artist.urls.length ? <li><a className="artistLink url3" href={artist.urls[2]}>{artist.urls[2]}</a></li> : ''}
                  </ul>
                </div>
              </div>
              <div className="tracklist">
                <h2 className="text-left mt-3 ml-3">Tracklist:</h2>
                <ol className="">
                  { tracklist ? tracklist.map((track) => <li className="text-left" key={track.title}>{track.title}</li>) : ''}
                </ol>
              </div>
              <div className="discogsLink">
                <a href={recordDetail.uri} className="btn btn-danger mt-2 button">See More at Discogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleAlbum;
