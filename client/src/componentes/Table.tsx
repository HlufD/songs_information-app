import "./Table.css";
import Modal from "./Modal";
import UpdateSong from "../pages/UpdateSong";
import Assertion from "./Assertion";
import TabelRow from "./TabelRow";
import { css } from "@emotion/react";
import Pagination from "./Pagination";
import { useSongs } from "../utils/useSongs";
import { usePagiantie } from "../utils/usePaginate";

function Table({ searchterm }: { searchterm: string }) {
  const { song, songId, isOpen, work, songs, onDeleteHandler, onEditHandler } =
    useSongs();

  const { songsPerPage, setsongsPerPage, paginate, currontSongs } =
    usePagiantie(songs, searchterm);

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
