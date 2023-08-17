import { css } from "@emotion/react";
import Input from "../componentes/Input";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongRequest } from "../redux/features/songSlice";
import { RootStateType } from "../redux/store";
import { InfinitySpin } from "react-loader-spinner";

function AddSong() {
  const initilaState = {
    title: "",
    artist: "",
    album: "",
    genre: "",
  };
  const dispatch = useDispatch();
  const [song, setSong] = useState(initilaState);
  const isLoading = useSelector(
    (state: RootStateType) => state.songs.isLoading
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addSongRequest(song));
    setSong(initilaState);
  };

  return (
    <form css={formStyle} onSubmit={onSubmitHandler}>
      <Input
        placeholder="Title"
        name="title"
        type="text"
        value={song.title}
        song={song}
        setSong={setSong}
      />
      <Input
        placeholder="Album"
        name="album"
        type="text"
        value={song.album}
        song={song}
        setSong={setSong}
      />
      <Input
        song={song}
        setSong={setSong}
        placeholder="Artist"
        name="artist"
        type="text"
        value={song.artist}
      />
      <Input
        song={song}
        setSong={setSong}
        placeholder="Genre"
        name="genre"
        type="text"
        value={song.genre}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        `}
      >
        <button css={buttonStyle}>Add Song</button>
      </div>
      {isLoading && <InfinitySpin width="100" color="#4fa94d" />}
    </form>
  );
}

export default AddSong;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 989px) {
    width: 80%;
  }
`;
const buttonStyle = css`
  text-align: center;
  padding: 10px 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #196ba7;
  border-radius: 6px;
  font-size: 12px;
  color: white;
  transition: all ease-in 0.4s;
  margin-top: 20px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #1a8ddf;
  }
`;
