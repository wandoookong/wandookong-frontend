/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { TEAM_PARTY_MEMBER_STATUS } from "../../../../../api/types/fieldType";

export default function StatusPill({ memberStatus }) {
  const stylePill = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 8px;
    background: ${memberStatusBackground(memberStatus)};
    border-radius: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17.16px;
    letter-spacing: -0.005em;
    color: #ffffff;
  `;

  return <div css={stylePill}>{memberStatusText(memberStatus)}</div>;
}

function memberStatusBackground(memberStatus: TEAM_PARTY_MEMBER_STATUS) {
  switch (memberStatus) {
    case "apply":
      return "#AFD89E";
    case "allow":
      return "#47B561";
    case "deny":
      return "#EF5533";
    case "expired":
      return "#A7A7A7";
  }
}

function memberStatusText(memberStatus: TEAM_PARTY_MEMBER_STATUS) {
  switch (memberStatus) {
    case "apply":
      return "대기중";
    case "allow":
      return "참여 수락";
    case "deny":
      return "참여 거절";
    case "expired":
      return "기간 만료";
  }
}
