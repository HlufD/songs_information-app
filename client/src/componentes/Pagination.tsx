/* eslint-disable @typescript-eslint/ban-types */
import { css } from "@emotion/react";

interface propTypes {
  songsPerpage: number;
  tottalNumberOfSongs: number;
  paginate: Function;
  setsongsPerPage: Function;
}

function Pagination({
  songsPerpage,
  tottalNumberOfSongs,
  paginate,
  setsongsPerPage,
}: propTypes) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(tottalNumberOfSongs / songsPerpage); i++) {
    pageNumber.push(i);
  }
  function handleOnchge(e: React.ChangeEvent<HTMLSelectElement>) {
    setsongsPerPage(e.target.value);
  }

  return (
    <div css={pagtinationStyle}>
      <div>
        <select
          name="songsPerPage"
          css={selectStyel}
          onChange={handleOnchge}
          defaultValue={songsPerpage}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      {pageNumber.map((page) => {
        return (
          <div
            onClick={() => paginate(page)}
            css={pageIndictorStyle}
            key={page}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

const pagtinationStyle = css`
  ${verticalCenter};
  margin-top: 20px;
  padding: 4px;
  justify-content: end;
`;
const pageIndictorStyle = css`
  border: 1px solid #1a9bd6;
  width: 20px;
  ${verticalCenter};
  padding: 3px 20px;
  margin-right: 1px;
  justify-content: center;
  transition: all ease-in 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const selectStyel = css`
  padding: 3px 10px;
  margin-right: 10px;
`;
