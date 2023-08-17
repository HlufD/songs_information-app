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
            css={css`
              color: #c93131;
              font-size: 18px;
              &:hover {
                cursor: pointer;
              }
            `}
          />
        </td>
        <td
          css={css`
            text-align: center;
          `}
        >
          <FaEdit
            onClick={() => onEditHandler(song._id)}
            css={css`
              color: #1a9bd6;
              font-size: 18px;
              &:hover {
                cursor: pointer;
              }
            `}
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
