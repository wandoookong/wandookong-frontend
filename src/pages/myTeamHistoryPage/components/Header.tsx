/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const style = css`
  display: flex;
  align-items: center;
  margin: 0 16px;
  margin-top: 44px;
  button {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #242c35;
`;

export default function Header() {
  return (
    <section css={style}>
      <button>&lt;</button>
      내가 만든 완두콩 모두보기
    </section>
  );
}
