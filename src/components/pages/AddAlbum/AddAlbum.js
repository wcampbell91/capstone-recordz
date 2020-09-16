import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import collectionData from '../../../helpers/data/collectionData';

const AddAlbum = () => {
  const [artist, setArtist] = useState('');
  const [artistId, setArtistId] = useState(null);
  const [album, setAlbum] = useState('');
  const [albumId, setAlbumId] = useState(null);
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState('');
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

  const createAlbumEvent = (e) => {
    e.preventDefault();
    const newAlbum = {
      artist,
      artistId,
      album,
      albumId,
      genre,
      coverImage,
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
      <form className="Col-6 offset-3">
        <div className="form-group">
          <lable htmlFor ="artistName">Artist Name</lable>
          <input
          type="text"
          class="form-control"
          id="artistName"
          value={artist}
          placeholder="Enter Artist Name"
          onChange={setArtistEvent}
          />
        </div>
        <div className="form-group">
          <lable htmlFor ="artistId">Artist Id</lable>
          <input
          type="text"
          class="form-control"
          id="artistId"
          value={artistId}
          placeholder="Enter Artist Id"
          onChange={setArtistIdEvent}
          />
        </div>
        <div className="form-group">
          <lable htmlFor ="albumName">Album Name</lable>
          <input
          type="text"
          class="form-control"
          id="albumName"
          value={album}
          placeholder="Enter Album Name"
          onChange={setAlbumEvent}
          />
        </div>
        <div className="form-group">
          <lable htmlFor ="albumId">Album Id</lable>
          <input
          type="text"
          class="form-control"
          id="albumId"
          value={albumId}
          placeholder="Enter Album Id"
          onChange={setAlbumIdEvent}
          />
        </div>
        <div className="form-group">
          <lable htmlFor ="genre">Genre</lable>
          <input
          type="text"
          class="form-control"
          id="genre"
          value={genre}
          placeholder="Enter Artist Name"
          onChange={setGenreEvent}
          />
        </div>
        <div className="form-group">
          <lable htmlFor ="coverImg">Cover Art</lable>
          <input
          type="text"
          class="form-control"
          id="coverImg"
          value={coverImage}
          placeholder="Enter Artist Name"
          onChange={setCoverImageEvent}
          />
        </div>
        <button className="btn btn-danger" type="submit" onClick={createAlbumEvent}>Submit</button>
      </form>
    </div>
  );
};

export default AddAlbum;
