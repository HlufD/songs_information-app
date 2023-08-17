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

function Table({ searchTerm }: { searchTerm: string }) {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  let [songId, setSongId] = useState("");
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

  const filterdSong =
    searchTerm == ""
      ? songs
      : songs.filter((song) => {
          return (
            song.album
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            song.artist
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            song.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            song.genre
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          );
        });

  return (
    <>
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
          {/* fitst row */}

          {filterdSong.map((song) => {
            return (
              <TabelRow
                key={song._id}
                song={song}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          })}

          {/* end fitst row */}
        </tbody>
      </table>
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
    </>
  );
}

export default Table;

const toBehidden = css`
  @media (max-width: 989px) {
    display: none;
  }
`;
