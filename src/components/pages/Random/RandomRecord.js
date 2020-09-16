import React, { useState, useEffect } from 'react';

import collectionData from '../../../helpers/data/collectionData';
import authData from '../../../helpers/data/authData';
import SingleAlbum from '../SingleAlbum/SingleAlbum';

const RandomRecord = (props) => {
  const [collection, setCollection] = useState([]);
  // const getCollection = () => {
  //   collectionData.getCollectionByUid(authData.getUid())
  //     .then((res) => setCollection(res.data))
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    collectionData.getCollectionByUid(authData.getUid())
      .then((res) => {
        console.error(res);
        setCollection(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const rndmNmbr = Math.floor(Math.random() * collection.length);
  const randomRecordId = (`record${rndmNmbr}`);

  return (
    <SingleAlbum key={randomRecordId} recordId={randomRecordId} />
  );
};

export default RandomRecord;
