/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { CAREER_RANGE, ROLE_MAIN } from "../../../api/types/fieldType";
import { MyPageContext } from "../MyPage";

const styleMe = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  margin-top: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
const styleEmail = css`
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #8d8d8d;
`;
const modifyButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background: #afd89e;
  border-radius: 31px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #000000;
  border: 0;
  cursor: pointer;
`;

const styleTagPill = css`
  display: flex;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 36px;
  margin: 0 20px;
  margin-top: 16px;

  b {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 143%;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: #131313;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  div {
    margin-left: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 143%;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: #131313;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    padding: 0;
  }
`;

export default function MyInfo() {
  const { isLoading, meInfo } = useContext(MyPageContext);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <div css={styleMe}>
        <div>
          <div>{meInfo.nickname}</div>
          <div css={styleEmail}>{meInfo.email}</div>
        </div>
        <button css={modifyButton} onClick={() => (window.location.href = "/my-profile")}>
          수정
        </button>
      </div>
      <div css={styleTagPill}>
        <b>소개태그</b>
        <div>
          {roleMainText(meInfo.roleMain)},{careerRangeText(meInfo.careerRange)}
          {["", ...meInfo.tagList].join()}
        </div>
      </div>
    </>
  );
}

function roleMainText(roleMain: ROLE_MAIN) {
  switch (roleMain) {
    case "pm":
      return "기획자";
    case "design":
      return "디자이너";
    case "dev":
      return "개발자";
  }
}

function careerRangeText(careerRange: CAREER_RANGE) {
  switch (careerRange) {
    case "0_4":
      return "0~4년차";
    case "4_10":
      return "4~10년차";
    case "10_100":
      return "10년차~";
  }
}
