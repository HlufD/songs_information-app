export interface Song {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongsInGenre {
  _id: string;
  count: number;
}

export interface SongsInEachAlbum {
  _id: string;
  numberOfSongs: number;
}

export interface AndAblumsPerArtist {
  totalSongs: number;
  artist: string;
  totalAlbums: number;
}

export interface StasticsType {
  totalNumberOfSongs: number;
  totalNumberOfArtists: number;
  totalNumberOfAlbums: number;
  totalNumberOfGenre: number;
  numberOfSongsInEachAlbum: SongsInEachAlbum[];
  numberOfSongsInGenre: SongsInGenre[];
  numberOfSongsAndAblumsPerArtist: AndAblumsPerArtist[];
  NumberOfSongsPerARtistPerGenre: any[];
  avarageNuberOfSongsPerAlbum: number;
}

export interface InitialState {
  songsData: Song[];
  isLoading: boolean;
  msg: string;
  statsics: StasticsType;
}

export interface response {
  message: string;
  song?: Song;
}
