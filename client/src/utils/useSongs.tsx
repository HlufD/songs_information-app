import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../redux/store";
import { getSongsFetch } from "../redux/features/songSlice";
import { opneModal } from "../redux/features/modalSlice";
import { Song } from "../types/SongType";

export function useSongs() {
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

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const onDeleteHandler = (id: string) => {
    dispatch(opneModal("deleting"));
    setSongId(id);
  };

  const onEditHandler = (_id: string) => {
    const intialSong = songs.find((song) => song._id == _id) as Song;
    setSong(intialSong);
    dispatch(opneModal("updating"));
  };
  return {
    song,
    setSong,
    songId,
    setSongId,
    isOpen,
    work,
    songs,
    onDeleteHandler,
    onEditHandler,
  };
}
