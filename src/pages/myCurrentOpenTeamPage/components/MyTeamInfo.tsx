/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { differenceInDays } from "date-fns";

const styleSub = css`
  margin: 0 20px;
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
  margin: 0 18px;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
  color: #242c35;
`;

export default function MyTeamInfo({ teamCategory, closeDueYmd, title }) {
  return (
    <section>
      <div css={styleSub}>
        <div>{teamCategory === "portfolio" ? "포트폴리오" : "사이드 프로젝트"}</div>
        <DdayPill closeDueYmd={closeDueYmd} />
      </div>
      <div css={styleTitle}>{title}</div>
    </section>
  );
}

const stylePill = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 9px;
  background: #ddba40;
  border-radius: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17.16px;
  letter-spacing: -0.005em;
  color: #ffffff;
`;

function DdayPill({ closeDueYmd }) {
  const diff = differenceInDays(new Date(closeDueYmd), new Date());
  return <div css={stylePill}>D-{diff}</div>;
}
