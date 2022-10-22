/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const style = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 16px;
  margin-top: 44px;
  button {
    width: 28px;
    height: 28px;
  }
`;

export default function Header() {
  return (
    <section css={style}>
      <button>X</button>
    </section>
  );
}
