import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import collectionData from '../../../helpers/data/collectionData';
import authData from '../../../helpers/data/authData';
import SingleAlbum from '../SingleAlbum/SingleAlbum';

const RandomRecord = (props) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    collectionData.getCollectionByUid(authData.getUid())
      .then((res) => {
        console.error(res);
        setCollection(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const rndmNmbr = Math.floor(Math.random() * collection.length);
  const randomRecord = collection[rndmNmbr];

  if (randomRecord) {
    const randomRecordId = (`/single/${randomRecord.id}`);
    return (
      <Redirect to={randomRecordId} />
    );
  }

  return (
    ''
  );
};

export default RandomRecord;
