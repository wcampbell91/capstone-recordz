import axios from 'axios';

const authBaseUrl = 'https://wc-recordz.herokuapp.com/api';
const baseUrl = 'https://api.discogs.com';

const getArtistByName = (artistName) => axios.get(`${authBaseUrl}/database/search?q=${artistName}&type=artist`);

const getArtistById = (artistId) => axios.get(`${baseUrl}/artists/${artistId}`);

const getAlbumById = (albumId) => axios.get(`${baseUrl}/masters/${albumId}`);

const getAlbumByName = (album) => axios.get(`${authBaseUrl}/database/search?q=${album}&type=release_title`);

export default {
  getArtistByName,
  getArtistById,
  getAlbumById,
  getAlbumByName,
};
