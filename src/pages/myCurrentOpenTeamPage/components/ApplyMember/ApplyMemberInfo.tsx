/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { ApplyMemberContainerContext } from "../../ApplyMemberContainer";
import { ROLE_DETAIL, CAREER_RANGE } from "../../../../api/types/fieldType";

const styleBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 14px;
  padding-top: 16px;
`;
const styleNickname = css`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #242c35;
`;
const styleInfo = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #434445;
`;

export default function ApplyMemberInfo() {
  const {
    applyMember: { roleDetail, nickname, careerRange },
  } = useContext(ApplyMemberContainerContext);

  return (
    <div css={styleBox}>
      <div css={styleNickname}>{nickname}</div>
      <div css={styleInfo}>
        {roleDetailText(roleDetail)}, {careerRangeText(careerRange)}
      </div>
    </div>
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

function careerRangeText(careerRange: CAREER_RANGE) {
  switch (careerRange) {
    case "0_4":
      return "0~4년차";
    case "4_10":
      return "4~10년차";
    case "10_100":
      return "10년차 이상";
  }
}
