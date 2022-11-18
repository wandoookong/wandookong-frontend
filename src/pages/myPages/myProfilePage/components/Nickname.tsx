/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useState } from "react";

const styleInput = css`
  margin-top: 30px;
  input {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 138.02%;
    color: #242c35;
    background: none;
    border: 0;
    border-bottom: 1px solid #242c35;
    width: 100%;

    &:focus {
      outline: none;
      border-bottom: 1px solid #47b561;
    }
  }
`;
const styleLength = css`
  text-align: right;
  margin-top: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 115.45%;
  letter-spacing: -0.4px;
  color: #c1b897;
`;

export default function Nickname({ nickname, setNickname }) {
  const [nicknameNew, setNicknameNew] = useState(nickname);

  const onChange = (e) => {
    e.preventDefault();

    setNicknameNew(e.currentTarget.value);
    setNickname(e.currentTarget.value);
  };

  return (
    <section css={styleInput}>
      <input type="text" value={nicknameNew} onChange={onChange} />
      <div css={styleLength}>{nicknameNew.length}/20</div>
    </section>
  );
}
