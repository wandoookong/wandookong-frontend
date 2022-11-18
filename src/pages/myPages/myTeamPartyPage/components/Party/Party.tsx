/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import MemoBox from "./MemoBox";
import TeamInfo from "./TeamInfo";
import { format } from "date-fns";

const styleBox = css`
  background: #ffffff;
  border-radius: 8px;
`;

const styleDate = css`
  margin: 0 1px;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 143%;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: #c1b897;
`;

export default function Party({ teamCategory, createdAt, title, memberStatus, roleDetail, memo }) {
  return (
    <>
      <div css={styleDate}>{format(new Date(createdAt), "yyyy.MM.dd")}</div>
      <div css={styleBox}>
        <TeamInfo teamCategory={teamCategory} title={title} memberStatus={memberStatus} />
        <MemoBox roleDetail={roleDetail} memo={memo} />
      </div>
    </>
  );
}
