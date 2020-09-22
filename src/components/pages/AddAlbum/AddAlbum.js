import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import collectionData from '../../../helpers/data/collectionData';

const AddAlbum = () => {
  const [artist, setArtist] = useState('');
  const [artistId, setArtistId] = useState('');
  const [album, setAlbum] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [rearCoverImage, setRearCoverImage] = useState('');
  const history = useHistory();

  const setArtistEvent = (e) => {
    e.preventDefault();
    setArtist(e.target.value);
  };

  const setArtistIdEvent = (e) => {
    e.preventDefault();
    setArtistId(e.target.value);
  };

  const setAlbumEvent = (e) => {
    e.preventDefault();
    setAlbum(e.target.value);
  };

  const setAlbumIdEvent = (e) => {
    e.preventDefault();
    setAlbumId(e.target.value);
  };

  const setGenreEvent = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  const setCoverImageEvent = (e) => {
    e.preventDefault();
    setCoverImage(e.target.value);
  };

  const setRearCoverImageEvent = (e) => {
    e.preventDefault();
    setRearCoverImage(e.target.value);
  };

  const createAlbumEvent = (e) => {
    e.preventDefault();
    const newAlbum = {
      artist,
      artistId,
      album,
      albumId,
      genre,
      coverImage,
      rearCoverImage,
      uid: authData.getUid(),
    };

    collectionData.addAlbum(newAlbum)
      .then((res) => {
        console.warn('add worked', res);
        history.push('/collection');
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="AddAlbum">
      <h1>Add A Record</h1>
      <div className="col-6 offset-3 text-center">
        <form className="">
          <div className="form-group">
            <label htmlFor ="artistName">Artist Name</label>
            <input
            type="text"
            className="form-control"
            id="artistName"
            value={artist}
            placeholder="Enter Artist Name"
            onChange={setArtistEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="artistId">Artist Id</label>
            <input
            type="text"
            className="form-control"
            id="artistId"
            value={artistId}
            placeholder="Enter Artist Id"
            onChange={setArtistIdEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="albumName">Album Name</label>
            <input
            type="text"
            className="form-control"
            id="albumName"
            value={album}
            placeholder="Enter Album Name"
            onChange={setAlbumEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="albumId">Album Id</label>
            <input
            type="text"
            className="form-control"
            id="albumId"
            value={albumId}
            placeholder="Enter Album Id"
            onChange={setAlbumIdEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="genre">Genre</label>
            <input
            type="text"
            className="form-control"
            id="genre"
            value={genre}
            placeholder="Enter Genre"
            onChange={setGenreEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="coverImg">Cover Art</label>
            <input
            type="text"
            className="form-control"
            id="coverImg"
            value={coverImage}
            placeholder="Enter Image Url"
            onChange={setCoverImageEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="rearCoverImg">Rear Cover Art</label>
            <input
            type="text"
            className="form-control"
            id="rearCoverImg"
            value={rearCoverImage}
            placeholder="Enter Image Url"
            onChange={setRearCoverImageEvent}
            />
          </div>
          <button className="btn button btn-danger" type="submit" onClick={createAlbumEvent}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddAlbum;
