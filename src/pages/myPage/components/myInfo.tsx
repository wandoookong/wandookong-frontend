import { useContext } from "react";
import { CAREER_RANGE, ROLE_MAIN } from "../../../api/types/fieldType";
import { MyPageContext } from "./MyPage";

export default function MyInfo() {
  const { isLoading, meInfo } = useContext(MyPageContext);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <div>
        <div>{meInfo.nickname}</div>
        <div>{meInfo.email}</div>
        <button>수정</button>
      </div>
      <div>
        <div>소개태그</div>
        <div>
          {roleMainText(meInfo.roleMain)},{careerRangeText(meInfo.careerRange)},{meInfo.tagList.join()}
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
