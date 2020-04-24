import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import infoPlaylist from './info.js'

import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    // const response = yield call(api.get, '/playlists');
    yield put(PlaylistsActions.getPlaylistsSucess(infoPlaylist));
  } catch (err) {
    console.log(err);
  }

}