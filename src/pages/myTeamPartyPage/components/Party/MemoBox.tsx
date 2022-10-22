/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useState } from "react";
import { ROLE_DETAIL } from "../../../../api/types/fieldType";

const styleMemo = css`
  margin: 0 14px;
  margin-top: 12px;
  div + div {
    margin-top: 8px;
  }
  width: calc(100% - 28px);
`;
const styleMemoRow = css`
  display: flex;
`;
const styleMemoTitle = css`
  width: 63px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: flex-start;
  color: #242c35;
  flex: none;
`;
const styleMemoText = css`
  display: flex;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #242c35;
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

export default function MemoBox({ roleDetail, memo }) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <>
      {showFullText ? (
        <>
          <div css={styleMemo}>
            <div css={styleMemoRow}>
              <span css={styleMemoTitle}>내콩:</span>
              <span css={styleMemoText}>{roleDetailText(roleDetail)}</span>
            </div>
            <div css={styleMemoRow}>
              <span css={styleMemoTitle}>나의 메세지:</span>
              <span css={styleMemoText}>{memo}</span>
            </div>
          </div>
          <div css={styleArrow}>
            <button onClick={() => setShowFullText(false)}>^</button>
          </div>
        </>
      ) : (
        <div css={styleArrow}>
          <button onClick={() => setShowFullText(true)}>v</button>
        </div>
      )}
    </>
  );
}

function roleDetailText(roleDetail: ROLE_DETAIL) {
  switch (roleDetail) {
    case "product":
      return "서비스 기획";
    case "ux_ui":
      return "디자인";
    case "app":
      return "앱 개발";
    case "web_front":
      return "프론트 개발";
    case "back_end":
      return "백엔드 개발";
  }
}
