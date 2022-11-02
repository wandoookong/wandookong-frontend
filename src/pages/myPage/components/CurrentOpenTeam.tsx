/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { MyPageContext } from "../MyPage";
import { TEAM_CATEGORY } from "../../../api/types/fieldType";
import { DdayPill } from "../../../components/pill/DdayPill";

const styleSection = css`
  margin: 0 20px;
  margin-top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const styleBox = css`
  margin: 0 20px;
  margin-top: 16px;
  margin-bottom: 31px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
`;
const styleRow = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.005em;
  color: #808080;
`;
const styleTitle = css`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 4px;
  cursor: pointer;
`;
const styleMember = css`
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 14px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    b {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
    }
    cursor: pointer;
  }
  div + div {
    border-left: 1px solid #cfc9c9;
  }
`;

export default function CurrentOpenTeam() {
  const { currentOpenTeam } = useContext(MyPageContext);

  return currentOpenTeam ? (
    <>
      <div css={styleSection}>나의 활동</div>
      <div css={styleBox}>
        <div css={styleRow}>
          <div>{teamCategoryText(currentOpenTeam.teamCategory)}</div>
          <DdayPill closeDueYmd={currentOpenTeam.closeDueYmd} />
        </div>
        <div css={styleTitle} onClick={() => (window.location.href = "/my-current-open")}>
          {currentOpenTeam.title}
        </div>
        <div css={styleMember}>
          <div onClick={() => (window.location.href = "/my-current-open#apply")}>
            <b>{currentOpenTeam.applyCount}</b>
            <span>신청자</span>
          </div>
          <div onClick={() => (window.location.href = "/my-current-open#allow")}>
            <b>
              {currentOpenTeam.allowCount}/{currentOpenTeam.capacityCount}
            </b>
            <span>참여자</span>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

function teamCategoryText(teamCategory: TEAM_CATEGORY) {
  switch (teamCategory) {
    case "portfolio":
      return "포트폴리오";
    case "side_project":
      return "사이드프로젝트";
  }
}
