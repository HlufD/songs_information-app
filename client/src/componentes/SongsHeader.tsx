/* eslint-disable @typescript-eslint/ban-types */
import { css } from "@emotion/react";
import { BiPlus, BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { opneModal } from "../redux/features/modalSlice";

function SongsHeader({
  setSearchTerm,
  searchTerm,
}: {
  setSearchTerm: Function;
  searchTerm: string;
}) {
  const dispatch = useDispatch();
  const onOpenHandler = () => {
    dispatch(opneModal("adding"));
  };
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header css={headerStyle}>
        <div>
          <BiSearch css={searchIconsStyle} />
          <input
            type="text"
            placeholder="search"
            css={inputStyle}
            value={searchTerm}
            onChange={onSearchHandler}
          />
        </div>
        <button css={buttonstyle} onClick={onOpenHandler}>
          <span>Add Song</span>
          <BiPlus css={addsongIconStyle} />
        </button>
      </header>
    </>
  );
}

export default SongsHeader;
const center = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headerStyle = css`
  ${center};
  margin-top: 30px;
  width: 70vw;
  div {
    ${center};
    padding: 5px;
    width: 40%;
    background-color: white;
    border-radius: 6px;
    @media (max-width: 989px) {
      width: 60%;
    }
  }
`;

const inputStyle = css`
  padding: 10px;
  width: 100%;
  margin-left: 5px;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    width: 100%;
    z-index: 3;
  }
`;

const buttonstyle = css`
  padding: 10px 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #196ba7;
  border-radius: 6px;
  font-size: 12px;
  color: white;
  &:hover {
    cursor: pointer;
  }
  span {
    margin-right: 6px;
    @media (max-width: 420px) {
      display: none;
    }
  }
  @media (max-width: 989px) {
    padding: 10px 15px;
  }
`;
const searchIconsStyle = css`
  margin-left: 8px;
  @media (max-width: 989px) {
    display: none;
  }
`;
const addsongIconStyle = css`
  font-size: 17px;
`;
