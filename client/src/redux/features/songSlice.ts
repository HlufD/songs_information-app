import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, Song, response } from "../../types/SongType";
import { toast } from "react-toastify";

const initialState: InitialState = {
  songsData: [],
  statsics: {
    totalNumberOfSongs: 0,
    totalNumberOfArtists: 0,
    totalNumberOfAlbums: 0,
    totalNumberOfGenre: 0,
    numberOfSongsInEachAlbum: [],
    numberOfSongsInGenre: [],
    numberOfSongsAndAblumsPerArtist: [],
    NumberOfSongsPerARtistPerGenre: [],
    avarageNuberOfSongsPerAlbum: 0,
  },
  isLoading: false,
  msg: "",
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songsData = action.payload;
      state.isLoading = false;
    },
    // end of Fetch
    addSongRequest: (state, action: PayloadAction<Song>) => {
      state.isLoading = true;
    },

    addSongSuccess: (state, action: PayloadAction<response>) => {
      state.msg = action.payload.message;
      toast.success(state.msg);
      if (action.payload.song) {
        state.songsData.push(action.payload.song);
      }
      state.isLoading = false;
    },
    // end of add
    updatesongRequest: (state, action: PayloadAction<{}>) => {
      state.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.msg = action.payload.message;
      toast.success(state.msg);
      state.isLoading = false;
    },
    updateSongFauiler: (state, action) => {
      state.msg = action.payload.message;
      toast.error(state.msg);
      state.isLoading = false;
    },
    // end of update

    deleteSongRequest: (state, action: PayloadAction<String>) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.msg = action.payload.data.message;
      toast.success(state.msg);
      state.songsData = state.songsData.filter(
        (song) => song._id !== action.payload.id
      );
      state.isLoading = false;
    },
    // end og deleteting

    getStatsFetched: (state) => {
      state.isLoading = true;
    },
    getStatsFetchedSuccess: (state, action) => {
      state.isLoading = false;
      state.statsics = action.payload;
    },
    // end of delete
  },
});
true;
export const {
  getSongsFetch,
  getSongsSuccess,
  addSongRequest,
  addSongSuccess,
  updatesongRequest,
  updateSongSuccess,
  updateSongFauiler,
  deleteSongRequest,
  deleteSongSuccess,
  getStatsFetched,
  getStatsFetchedSuccess,
} = songSlice.actions;
export default songSlice.reducer;
