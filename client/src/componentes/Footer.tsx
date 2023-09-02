import { css } from "@emotion/react";
function Footer() {
  return (
    <footer css={footerStyle}>
      <p>
        Copyright © 2023 <span>Songifiy</span>.
      </p>
    </footer>
  );
}

export default Footer;

const footerStyle = css`
  @media (max-width: 720px) {
    display: none;
  }
  p {
    font-size: 15px;
    span {
      font-family: cursive;
      font-size: 20px;
      color: #2499ef;
    }
  }
`;
