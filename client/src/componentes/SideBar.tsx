import { css } from "@emotion/react";
import { GiMusicalScore, GiDatabase } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SideBar() {
  return (
    <div css={rootStyle}>
      <section
        css={css`
          height: 90%;
        `}
      >
        {/* start of logo section */}
        <section>
          <div css={logoWrapper}>
            <div>
              <GiDatabase css={iconsStyle} />
            </div>
            <span>Songify </span>
          </div>
        </section>
        {/* end of logo section */}

        {/* start of navigation section */}
        <section css={sectionWrapper}>
          <h4>Dashboard</h4>
          <section>
            <Link to="/">
              <div css={navLinkstyle}>
                <GiMusicalScore css={iconsStyle} />
                <span>Songs</span>
              </div>
            </Link>
            <Link to="/songs/stastics">
              <div css={navLinkstyle}>
                <ImStatsDots css={iconsStyle} />
                <span>Stastics</span>
              </div>
            </Link>
          </section>
        </section>
        {/* end of Navigation section */}
      </section>
      <Footer />
    </div>
  );
}

export default SideBar;

const rootStyle = css`
  width: 100%;
  background-color: white;
  height: 100vh;
  box-shadow: 39px 0px 18px -23px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  @media (max-width: 989px) {
    width: 20%;
    padding: 10px 0px;
  }
  h4 {
    font-size: 16px;
    padding-left: 10px;
    margin-top: 20px;
  }
  span,
  h4 {
    @media (max-width: 989px) {
      display: none;
    }
  }
`;
const sectionWrapper = css`
  color: #5f748d;
  font-size: 13px;
`;
const logoWrapper = css`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  span {
    color: #3ea5ef;
    font-weight: 900;
  }
`;
const navLinkstyle = css`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  transition: all ease-in-out 0.4s;
  &:hover {
    background-color: #f5f6f7;
    cursor: pointer;
  }
  color: #2499ef;
`;

const iconsStyle = css`
  color: #3ea5ef;
  font-size: 16px;
  margin-right: 8px;
  @media (max-width: 989px) {
    font-size: 27px;
  }
`;
