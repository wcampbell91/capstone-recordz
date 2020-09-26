import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import collectionData from '../../../helpers/data/collectionData';
import discogsData from '../../../helpers/data/discogsData';

const AddAlbum = () => {
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [rearCoverImage, setRearCoverImage] = useState('');
  const history = useHistory();

  const setArtistEvent = (e) => {
    e.preventDefault();
    setArtist(e.target.value);
  };

  const getArtistId = async (e) => {
    try {
      const res = await discogsData.getArtistByName(artist);
      console.warn(res.data.results[0].id);
      return res.data.results[0].id;
    } catch (err) {
      console.error(err);
    }
    return null;
  };

  const setAlbumEvent = (e) => {
    e.preventDefault();
    setAlbum(e.target.value);
  };

  const getAlbumId = async (e) => {
    try {
      const res = await discogsData.getAlbumByName(album);
      console.warn(res.data.results[0].master_id);
      return res.data.results[0].master_id;
    } catch (err) {
      console.error(err);
    }
    return null;
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

  const createAlbumEvent = (artistId, albumId) => {
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
    console.warn(newAlbum);
    collectionData.addAlbum(newAlbum)
      .then((res) => {
        history.push('/collection');
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const [artistId, albumId] = await Promise.all([getArtistId(), getAlbumId()]);
    createAlbumEvent(artistId, albumId);
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
          <button className="btn button btn-danger" type="submit" onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddAlbum;
