import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { css } from "@emotion/react";

function Layout() {
  return (
    <div css={rootStyle}>
      <aside css={asideStyle}>
        <SideBar />
      </aside>
      <div
        css={css`
          width: 78vw;
        `}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

const rootStyle = css`
  display: flex;
  background-color: #f3f4f9;
  min-height: 100vh;
  padding-left: 270px;
  @media (max-width: 674px) {
    padding: 0 100px;
  }
  @media (max-width: 502px) {
    padding: 0 60px;
  }
`;

const asideStyle = css`
  width: 18vw;
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  margin-right: 200px;
  @media (max-width: 989px) {
    width: 60vw;
    margin-right: 0px;
  }
`;
