import { css } from "@emotion/react";
import React from "react";
import { Song } from "../types/SongType";

interface InputProps {
  type: string;
  value?: string;
  name: string;
  placeholder: string;
  song: Song;
  setSong: Function;
}
function Input({ type, placeholder, value, name, song, setSong }: InputProps) {
  const onChageHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSong = Object.assign({}, song, {
      [name]: e.target.value,
    });
    setSong(newSong);
  };

  return (
    <div>
      <input
        css={inputStyle}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChageHander}
      />
    </div>
  );
}

export default Input;

const inputStyle = css`
  padding: 8px;
  width: 25vw;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid #3ea5ef;
  outline: none;
  @media (max-width: 989px) {
    width: 75vw;
  }
`;
