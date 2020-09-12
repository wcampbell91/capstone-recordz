import React, { useState, useEffect } from 'react';

import collectionData from '../../../helpers/data/collectionData';
import authData from '../../../helpers/data/authData';
import AlbumCards from '../../shared/AlbumCards/AlbumCards';

import './YourCollection.scss';

const YourCollection = () => {
  const [collection, setCollection] = useState([]);

  const getCollection = () => {
    collectionData.getCollectionByUid(authData.getUid())
      .then((res) => setCollection(res))
      .catch((err) => console.error(err));
  };

  useEffect(getCollection, []);

  const albumCards = collection.map((record) => <AlbumCards key={record.id} record={record} />);

  return (
    <div className="YourCollection container-fluid">
      <h1 className="text-center mt-4">Your Collection</h1>
      <h2 className="sort">Sort By:</h2>
      <div className="sort-buttons">
        <button className="btn sort-button">Artist</button>
        <button className="btn sort-button nextbtn">Album</button>
        <button className="btn sort-button nextbtn">Genre</button>
      </div>

      <div className="card-columns">
        {albumCards}
      </div>
    </div>
  );
};

export default YourCollection;
