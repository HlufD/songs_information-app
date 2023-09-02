import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { css } from "@emotion/react";

function Layout() {
  return (
    <div css={rootStyle}>
      <aside css={asideStyle}>
        <SideBar />
      </aside>
      <main
        css={mainContentStyle}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

const rootStyle = css`
  display: flex;
  justify-content: center;
  background-color: #f3f4f9;
  min-height: 100vh;
  margin-left: 10%;
  
`;

const asideStyle = css`
  width: 18vw;
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  margin-right: 150px;
`;
const mainContentStyle = css`
  width: 78vw;
  @media (min-width: 988px) {
    margin-left: 10%;
  }
`