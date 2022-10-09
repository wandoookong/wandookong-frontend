/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext, useState } from "react";
import { ApplyMemberContainerContext } from "../../ApplyMemberContainer";

const styleMemo = css`
  margin: 0 14px;
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #242c35;
  width: calc(100% - 28px);
  line-height: 14px;
  padding-bottom: 16px;
`;
const styleMemoEllipsis = css`
  ${styleMemo}
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  padding: 0;
`;
const styleArrow = css`
  padding-top: 8px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 16px;
    height: 16px;
  }
`;

export default function MemoBox() {
  const {
    applyMember: { memo },
  } = useContext(ApplyMemberContainerContext);

  const [showFullText, setShowFullText] = useState(false);

  return (
    <>
      <div css={showFullText ? styleMemo : styleMemoEllipsis}>{memo}</div>
      {!showFullText && (
        <div css={styleArrow}>
          <button onClick={() => setShowFullText(true)}>v</button>
        </div>
      )}
    </>
  );
}
