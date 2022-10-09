/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { ApplyMemberContainerContext } from "../../ApplyMemberContainer";

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 20px;
  button + button {
    margin-left: 18px;
  }
`;
const styleButtonDeny = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 1px solid #95be8d;
  border-radius: 8px;
  background: none;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #434445;
`;
const styleButtonAllow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 1px solid #47b561;
  background: #47b561;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
`;

export default function BottomButton() {
  return (
    <div css={style}>
      <button css={styleButtonDeny}>거절</button>
      <button css={styleButtonAllow}>수락</button>
    </div>
  );
}
