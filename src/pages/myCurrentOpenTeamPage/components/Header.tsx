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

export default function Header() {
  return (
    <section css={style}>
      <button>&lt;</button>
      <button>ㅂ</button>
    </section>
  );
}
