/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { DdayPill } from "../../../components/pill/DdayPill";

const styleSub = css`
  margin: 0;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.005em;
  color: #434445;
`;
const styleTitle = css`
  margin: 0;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  color: #242c35;
`;

export default function MyTeamInfo({ teamCategory, closeDueYmd, currentTimestamp, title }) {
  return (
    <section>
      <div css={styleSub}>
        <div>{teamCategory === "portfolio" ? "포트폴리오" : "사이드 프로젝트"}</div>
        <DdayPill closeDueYmd={closeDueYmd} currentTimestamp={currentTimestamp} />
      </div>
      <div css={styleTitle}>{title}</div>
    </section>
  );
}
