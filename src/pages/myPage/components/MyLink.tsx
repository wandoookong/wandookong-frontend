/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const styleLink = css`
  margin: 0 20px;
  margin-bottom: 31px;
  display: flex;
  align-items: center;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    text-decoration: none;
  }
`;

export default function MyLink({ link, title }) {
  return (
    <div css={styleLink}>
      <a href={link}>{title}</a>
    </div>
  );
}
