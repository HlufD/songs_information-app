import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  addSong,
  deleteSong,
  fetchSongs,
  getStastics,
  updateSong,
} from "../api";
import { Song, StasticsType, response } from "../../types/SongType";

import {
  addSongSuccess,
  deleteSongSuccess,
  getSongsSuccess,
  getStatsFetchedSuccess,
  updateSongFauiler,
  updateSongSuccess,
} from "../features/songSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* workrGetFetch() {
  const songs: Song[] = yield call(() => fetchSongs());
  yield put(getSongsSuccess(songs));
}

function* getSongSaga() {
  yield takeLatest("songs/getSongsFetch", workrGetFetch);
}
//end of fetching

function* workAddSong(action: PayloadAction<Song>) {
  const data: response = yield call(() => addSong(action.payload));
  yield put(addSongSuccess(data));
}
// end of adding song

function* postSongSaaga() {
  yield takeLatest("songs/addSongRequest", workAddSong);
}

function* workUpadeSong(action: PayloadAction<{ id: string; song: Song }>) {
  try {
    const { title, artist, album, genre } = action.payload.song;
    const data: response = yield call(() =>
      updateSong(action.payload.id, { title, artist, genre, album })
    );
    yield put(updateSongSuccess(data));
  } catch (error) {
    yield put(updateSongFauiler(error));
  }
}

function* updateSongSaga() {
  yield takeLatest("songs/updatesongRequest", workUpadeSong);
}
// end of updating

function* workDeleteSong(action: PayloadAction<string>) {
  const id = action.payload;
  const data: response = yield call(() => deleteSong(action.payload));
  yield put(deleteSongSuccess({ data, id }));
}

function* deleteSongSaga() {
  yield takeLatest("songs/deleteSongRequest", workDeleteSong);
}
// end of deleting

function* workGenerateStatstics() {
  const data: StasticsType = yield call(getStastics);
  yield put(getStatsFetchedSuccess(data));
}

function* generareStastics() {
  yield takeLatest("songs/getStatsFetched", workGenerateStatstics);
}

export function* rootSaga() {
  yield all([
    fork(getSongSaga),
    fork(postSongSaaga),
    fork(updateSongSaga),
    fork(deleteSongSaga),
    fork(generareStastics),
  ]);
}
