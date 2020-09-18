import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getCollectionByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/records.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getCollectionById = (recordId) => axios.get(`${baseUrl}/records/${recordId}.json`);

const addAlbum = (newAlbum) => axios.post(`${baseUrl}/records.json`, newAlbum);

const deleteRecord = (recordId) => axios.delete(`${baseUrl}/records/${recordId}.json`);

const updateAlbum = (recordId, newAlbum) => axios.put(`${baseUrl}/records/${recordId}.json`, newAlbum);

export default {
  getCollectionByUid,
  getCollectionById,
  addAlbum,
  deleteRecord,
  updateAlbum,
};
