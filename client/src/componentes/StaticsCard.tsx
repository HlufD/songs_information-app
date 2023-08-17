import React from "react";
import { css } from "@emotion/react";
interface propsTypes {
  Icon: React.ReactNode;
  text: string;
  total: number;
}
function StaticsCard({ Icon, text, total }: propsTypes) {
  return (
    <div css={cardStyle}>
      <div css={iconsWrapper}>{Icon}</div>
      <div css={numericInfoStyel}>
        <h5>{text}</h5>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default StaticsCard;

const cardStyle = css`
  width: 220px;
  padding: 20px 10px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  margin-top: 20px;
  @media (max-width: 989px) {
    box-shadow: 39px 0px 18px -23px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

const iconsWrapper = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5cb8e2;
`;

const numericInfoStyel = css`
  padding: 10px;
  h5 {
    color: #94a4c4;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 6px;
  }
  p {
    font-weight: 600;
    line-height: 27px;
    color: #1d2438;
  }
`;
