/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 20px;
`;
const styleButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;

  background: #afd89e;
  border: 1px solid #afd89e;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #434445;
`;

export default function BottomButton() {
  return (
    <div css={style}>
      <button css={styleButton}>참여자 삭제</button>
    </div>
  );
}
