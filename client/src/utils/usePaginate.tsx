import { useState } from "react";
import { searchSong } from "./searchSong";
import { Song } from "../types/SongType";

export function usePagiantie(songs: Song[], searchterm: string) {
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage, setsongsPerPage] = useState(10);
  const lastIndexOfLastSong = currentPage * songsPerPage;
  const firstIndexOfSong = lastIndexOfLastSong - songsPerPage;
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  const currontSongs =
    searchterm != ""
      ? searchSong(songs, searchterm).slice(
          firstIndexOfSong,
          lastIndexOfLastSong
        )
      : songs.slice(firstIndexOfSong, lastIndexOfLastSong);
  return {
    currentPage,
    setCurrentPage,
    songsPerPage,
    setsongsPerPage,
    firstIndexOfSong,
    lastIndexOfLastSong,
    paginate,
    currontSongs,
  };
}
