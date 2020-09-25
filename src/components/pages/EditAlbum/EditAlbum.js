import React, { useState, useEffect } from 'react';

import collectionData from '../../../helpers/data/collectionData';

const EditAlbum = (props) => {
  const [record, setRecord] = useState({});

  useEffect(() => {
    const { recordId } = props.match.params;
    collectionData.getCollectionById(recordId)
      .then((res) => setRecord(res.data))
      .catch((err) => console.error(err));
  }, []);

  const editArtistEvent = (e) => {
    e.preventDefault();
    const artist = e.target.value;
    setRecord({ ...record, artist });
  };

  const editAlbumEvent = (e) => {
    e.preventDefault();
    const album = e.target.value;
    setRecord({ ...record, album });
  };

  const editGenreEvent = (e) => {
    e.preventDefault();
    const genre = e.target.value;
    setRecord({ ...record, genre });
  };

  const editCoverImageEvent = (e) => {
    e.preventDefault();
    const coverImage = e.target.value;
    setRecord({ ...record, coverImage });
  };

  const editRearCoverImageEvent = (e) => {
    e.preventDefault();
    const rearCoverImage = e.target.value;
    setRecord({ ...record, rearCoverImage });
  };

  const updateRecordEvent = (e) => {
    e.preventDefault();
    const newRecord = record;
    const { recordId } = props.match.params;
    collectionData.updateAlbum(recordId, newRecord)
      .then((res) => {
        props.history.push(`/single/${recordId}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="Editrecord">
      <h1>Update This Record</h1>
      <div className="col-6 offset-3 text-center">
        <form>
          <div className="form-group">
            <label htmlFor ="artistName">Artist Name</label>
            <input
            type="text"
            className="form-control"
            id="artistName"
            placeholder="Enter Artist Name"
            value={record.artist}
            onChange={editArtistEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="recordName">record Name</label>
            <input
            type="text"
            className="form-control"
            id="recordName"
            placeholder="Enter record Name"
            value={record.album}
            onChange={editAlbumEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="genre">Genre</label>
            <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Enter Genre"
            value={record.genre}
            onChange={editGenreEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="coverImg">Cover Art</label>
            <input
            type="text"
            className="form-control"
            id="coverImg"
            placeholder="Enter Image Url"
            value={record.coverImage}
            onChange={editCoverImageEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="rearCoverImg">Rear Cover Art</label>
            <input
            type="text"
            className="form-control"
            id="rearCoverImg"
            placeholder="Enter Image Url"
            value={record.rearCoverImage}
            onChange={editRearCoverImageEvent}
            />
          </div>
          <button className="btn button btn-danger" type="submit" onClick={updateRecordEvent}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditAlbum;
