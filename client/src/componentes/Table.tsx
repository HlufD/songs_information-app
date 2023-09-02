import "./Table.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/store";
import Modal from "./Modal";
import UpdateSong from "../pages/UpdateSong";
import { opneModal } from "../redux/features/modalSlice";
import Assertion from "./Assertion";
import { useEffect, useState } from "react";
import { getSongsFetch } from "../redux/features/songSlice";
import TabelRow from "./TabelRow";
import { Song } from "../types/SongType";
import { css } from "@emotion/react";
import Pagination from "./Pagination";
import { searchSong } from "../utils/searchSong";

function Table({ searchterm }: { searchterm: string }) {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [songId, setSongId] = useState("");
  const isOpen = useSelector((state: RootStateType) => state.modal.isOpen);
  const work = useSelector((state: RootStateType) => state.modal.work);
  const songs = useSelector((state: RootStateType) => state.songs.songsData);

  const dispatch = useDispatch();
  const onDeleteHandler = (id: string) => {
    dispatch(opneModal("deleting"));
    setSongId(id);
  };

  const onEditHandler = (_id: string) => {
    const intialSong = songs.find((song) => song._id == _id) as Song;
    setSong(intialSong);
    dispatch(opneModal("updating"));
  };

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  //pagtination
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage, setsongsPerPage] = useState(10);
  const lastIndexOfLastSong = currentPage * songsPerPage;
  const firstIndexOfSong = lastIndexOfLastSong - songsPerPage;

  const currontSongs =
    searchterm != ""
      ? searchSong(songs, searchterm).slice(
          firstIndexOfSong,
          lastIndexOfLastSong
        )
      : songs.slice(firstIndexOfSong, lastIndexOfLastSong);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  return (
    <div css={rootStyle}>
      <table>
        <thead>
          <tr>
            <th css={toBehidden}>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th css={toBehidden}>Genre</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currontSongs.map((song) => {
            return (
              <TabelRow
                key={song._id}
                song={song}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        tottalNumberOfSongs={songs.length}
        songsPerpage={songsPerPage}
        paginate={paginate}
        setsongsPerPage={setsongsPerPage}
      />
      {isOpen && work == "updating" && (
        <Modal title="Update Song">
          <UpdateSong intialSong={song} />
        </Modal>
      )}
      {isOpen && work == "deleting" && (
        <Modal title="Remove song">
          <Assertion songId={songId} />
        </Modal>
      )}
    </div>
  );
}

export default Table;
const rootStyle = css`
  margin-top: 25px;
`;
const toBehidden = css`
  @media (max-width: 989px) {
    display: none;
  }
`;
