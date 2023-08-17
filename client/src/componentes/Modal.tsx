import { FC } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/store";
import { closeModal } from "../redux/features/modalSlice";
import { css } from "@emotion/react";
import { FaRegWindowClose } from "react-icons/fa";
import { getSongsFetch } from "../redux/features/songSlice";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal: FC<ModalProps> = ({ children, title }) => {
  const isOpen = useSelector((state: RootStateType) => state.modal.isOpen);
  const dispatch = useDispatch();
  const onClickHnadler = () => {
    dispatch(closeModal());
    dispatch(getSongsFetch());
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div css={overlayStyle} />

      <div>
        <div css={modalStyles}>
          <div css={modalHeadrstyle}>
            <p>{title}</p>
            <span onClick={onClickHnadler}>
              <FaRegWindowClose />
            </span>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;

const modalStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  min-width: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 5px;
  @media (max-width: 989px) {
    min-width: 350px;
    min-height: 200px;
  }
`;

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
const modalHeadrstyle = css`
  display: flex;
  justify-content: space-between;
  width: 25vw;
  padding: 5px 0;
  align-items: center;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  span {
    color: #e02020;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 989px) {
    width: 75vw;
  }
`;
