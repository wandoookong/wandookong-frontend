/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const style = css`
  margin: 0 14px;
  margin-top: 12px;
  display: flex;
  div + div {
    margin-left: 5px;
  }
`;

export default function TagList({ tagList }) {
  return (
    <div css={style}>
      {tagList.map((tagName) => (
        <TagPill key={tagName} tagName={tagName} />
      ))}
    </div>
  );
}

const stylePill = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  border: 1px solid #d9d9d9;
  border-radius: 27px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #242c35;
`;

function TagPill({ tagName }) {
  return <div css={stylePill}>{tagName}</div>;
}
