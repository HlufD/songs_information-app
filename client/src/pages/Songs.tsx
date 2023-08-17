import { BiSearch, BiPlus } from "react-icons/bi";
import { css } from "@emotion/react";
import Table from "../componentes/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/store";
import Modal from "../componentes/Modal";
import AddSong from "./AddSong";
import { opneModal } from "../redux/features/modalSlice";
import { useState } from "react";

function Songs() {
  const [searchTerm, setSearchTerm] = useState("");
  const isOpen = useSelector((state: RootStateType) => state.modal.isOpen);
  const work = useSelector((state: RootStateType) => state.modal.work);
  const dispach = useDispatch();

  const onOpenHandler = () => {
    dispach(opneModal("adding"));
  };
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div css={rootStyle}>
      <header css={headerStyle}>
        <div>
          <BiSearch
            css={css`
              margin-left: 8px;
              @media (max-width: 989px) {
                display: none;
              }
            `}
          />
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
          <BiPlus
            css={css`
              font-size: 17px;
            `}
          />
        </button>
      </header>
      <main
        css={css`
          margin-top: 25px;
        `}
      >
        <div>
          <Table searchTerm={searchTerm} />
        </div>
      </main>
      {isOpen && work == "adding" && (
        <Modal title="Add Song">
          <AddSong />
        </Modal>
      )}
    </div>
  );
}

export default Songs;

const rootStyle = css`
  padding: 20px;
`;
export const center = css`
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

export const buttonstyle = css`
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
export const inputStyle = css`
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
