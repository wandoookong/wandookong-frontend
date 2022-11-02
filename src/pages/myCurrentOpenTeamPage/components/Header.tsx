/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
  margin-top: 44px;
  button {
    width: 24px;
    height: 24px;
  }
`;

export default function Header({ onClickDelete }) {
  return (
    <section css={style}>
      <button onClick={() => window.history.back()}>&lt;</button>
      <button onClick={onClickDelete}>ㅂ</button>
    </section>
  );
}
