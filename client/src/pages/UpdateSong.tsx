import { useState } from "react";
import Input from "../componentes/Input";
import { css } from "@emotion/react";
import { Song } from "../types/SongType";
import { useDispatch, useSelector } from "react-redux";
import { updatesongRequest } from "../redux/features/songSlice";
import { InfinitySpin } from "react-loader-spinner";
import { RootStateType } from "../redux/store";
import { formStyle } from "./AddSong";
import { toast } from "react-toastify";
import { SongSchema } from "../validations/songValidation";

function UpdateSong({ intialSong }: { intialSong: Song }) {
  const [song, setSong] = useState(intialSong);
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootStateType) => state.songs.isLoading
  );

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await SongSchema.validate(song);
      const id = song._id;
      dispatch(updatesongRequest({ id, song }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.errors[0]);
    }
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
        <button css={buttonStyle}>Update Song</button>
      </div>
      {isLoading && <InfinitySpin width="100" color="#4fa94d" />}
    </form>
  );
}

export default UpdateSong;
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
