/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { differenceInDays } from "date-fns";

const stylePill = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  background: #ddba40;
  border-radius: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17.16px;
  letter-spacing: -0.005em;
  color: #ffffff;
`;

export function DdayPill({ closeDueYmd }) {
  const diff = differenceInDays(new Date(closeDueYmd), new Date());
  return <div css={stylePill}>D-{diff}</div>;
}
