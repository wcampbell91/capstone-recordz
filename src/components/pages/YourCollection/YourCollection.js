import React, { useState, useEffect } from 'react';

import collectionData from '../../../helpers/data/collectionData';
import authData from '../../../helpers/data/authData';
import AlbumCards from '../../shared/AlbumCards/AlbumCards';

import './YourCollection.scss';

const YourCollection = (props) => {
  const [collection, setCollection] = useState([]);

  const getCollection = () => {
    collectionData.getCollectionByUid(authData.getUid())
      .then((res) => setCollection(res))
      .catch((err) => console.error(err));
  };

  useEffect(getCollection, []);

  const sortByArtist = (e) => {
    e.persist();
    const compare = (a, b) => {
      const keyA = a.artist.toUpperCase();
      const keyB = b.artist.toUpperCase();

      let comparison = 0;
      if (keyA > keyB) {
        comparison = 1;
      } else if (keyA < keyB) {
        comparison = -1;
      }
      return comparison;
    };

    const sortedCollection = [...collection.sort(compare)];
    setCollection(sortedCollection);
  };

  const sortByAlbum = (e) => {
    const compare = (a, b) => {
      const keyA = a.album.toUpperCase();
      const keyB = b.album.toUpperCase();

      let comparison = 0;
      if (keyA > keyB) {
        comparison = 1;
      } else if (keyA < keyB) {
        comparison = -1;
      }
      return comparison;
    };

    const sortedCollection = [...collection.sort(compare)];
    setCollection(sortedCollection);
  };

  const sortByGenre = (e) => {
    const compare = (a, b) => {
      const keyA = a.genre.toUpperCase();
      const keyB = b.genre.toUpperCase();

      let comparison = 0;
      if (keyA > keyB) {
        comparison = 1;
      } else if (keyA < keyB) {
        comparison = -1;
      }
      return comparison;
    };

    const sortedCollection = [...collection.sort(compare)];
    setCollection(sortedCollection);
  };

  const albumCards = collection.map((record) => <AlbumCards key={record.id} record={record} />);

  return (
    <div className="YourCollection container-fluid">
      <h1 className="text-center mt-4">Your Collection</h1>
      <h2 className="sort">Sort By:</h2>
      <div className="sort-buttons">
        <button className="btn sort-button" id="artist" onClick={sortByArtist}>Artist</button>
        <button className="btn sort-button nextbtn" id="album" onClick={sortByAlbum}>Album</button>
        <button className="btn sort-button nextbtn" id="genre" onClick={sortByGenre}>Genre</button>
      </div>

      <div className="card-deck">
        {albumCards}
      </div>
    </div>
  );
};

export default YourCollection;
