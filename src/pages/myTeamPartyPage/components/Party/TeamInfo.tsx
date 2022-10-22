/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { TEAM_CATEGORY } from "../../../../api/types/fieldType";
import StatusPill from "./StatusPill";

const styleBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 14px;
  padding-top: 16px;
`;
const styleNickname = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.005em;
  color: #434445;
`;
const styleTitle = css`
  margin: 0 14px;
  margin-top: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #242c35;
`;

export default function TeamInfo({ teamCategory, title, memberStatus }) {
  return (
    <>
      <div css={styleBox}>
        <div css={styleNickname}>{teamCategoryText(teamCategory)}</div>
        <StatusPill memberStatus={memberStatus} />
      </div>
      <div css={styleTitle}>{title}</div>
    </>
  );
}

function teamCategoryText(teamCategory: TEAM_CATEGORY) {
  switch (teamCategory) {
    case "portfolio":
      return "포트폴리오";
    case "side_project":
      return "사이드 프로젝트";
  }
}
