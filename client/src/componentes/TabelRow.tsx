/* eslint-disable @typescript-eslint/ban-types */
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Song } from "../types/SongType";
import { css } from "@emotion/react";

interface PropsType {
  song: Song;
  onDeleteHandler: Function;
  onEditHandler: Function;
}

function TabelRow({ song, onEditHandler, onDeleteHandler }: PropsType) {
  return (
    <>
      <tr key={song._id}>
        <td css={toBehidden}>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td css={toBehidden}>{song.genre}</td>
        <td>
          <AiOutlineDelete
            onClick={() => onDeleteHandler(song._id)}
            css={deleteIconsStyle}
          />
        </td>
        <td
          css={css`
            text-align: center;
          `}
        >
          <FaEdit
            onClick={() => onEditHandler(song._id)}
            css={editIconsStyle}
          />
        </td>
      </tr>
    </>
  );
}

export default TabelRow;

const toBehidden = css`
  @media (max-width: 989px) {
    display: none;
  }
`;

const baseInconstyle = css`
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const editIconsStyle = css`
  ${baseInconstyle};
  color: #1a9bd6;
`;

const deleteIconsStyle = css`
  ${baseInconstyle};
  color: #c93131;
`;
