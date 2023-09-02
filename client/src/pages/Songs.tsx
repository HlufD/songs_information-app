import { css } from "@emotion/react";
import Table from "../componentes/Table";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/store";
import Modal from "../componentes/Modal";
import AddSong from "./AddSong";
import SongsHeader from "../componentes/SongsHeader";
import { useState } from "react";

function Songs() {
  const [searchterm, setSearchTerm] = useState("");
  const isOpen = useSelector((state: RootStateType) => state.modal.isOpen);
  const work = useSelector((state: RootStateType) => state.modal.work);
  return (
    <div css={rootStyle}>
      <SongsHeader setSearchTerm={setSearchTerm} searchTerm={searchterm} />
      <Table searchterm={searchterm} />
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
