import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/features/modalSlice";
import { deleteSongRequest, getSongsFetch } from "../redux/features/songSlice";
import { RootStateType } from "../redux/store";
import { InfinitySpin } from "react-loader-spinner";

function Assertion({ songId }: { songId: string }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootStateType) => state.songs.isLoading
  );
  const onDeleteHandler = () => {
    dispatch(deleteSongRequest(songId));
    dispatch(closeModal());
    dispatch(getSongsFetch());
  };
  const onCancelHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div css={wrapper}>
      <p>Do you want to delete this song ?</p>
      <div css={buttonWraper}>
        <button css={deletebuttons} onClick={onDeleteHandler}>
          Delete
        </button>
        <button css={buttons} onClick={onCancelHandler}>
          Cancle
        </button>
      </div>
      {isLoading && <InfinitySpin width="100" color="#4fa94d" />}
    </div>
  );
}

export default Assertion;

const wrapper = css`
  padding: 10px;
  font-size: 13px;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 15px;
    padding: 10px;
  }
  @media (max-width: 989px) {
    width: 75vw;
  }
`;

const buttonWraper = css`
  display: flex;
  justify-content: center;
`;
const buttons = css`
  padding: 8px 25px;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const deletebuttons = css`
  padding: 8px 25px;
  font-size: 13px;
  background-color: #f13f3f;
  color: white;
  margin-right: 30px;
  border: none;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: #e61212;
  }
`;
