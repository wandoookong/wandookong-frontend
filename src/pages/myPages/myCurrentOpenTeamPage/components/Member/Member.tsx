/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import MemberInfo from "./MemberInfo";
import MemoBox from "./MemoBox";
import TagList from "./TagList";

const styleBox = css`
  background: #ffffff;
  border-radius: 8px;
`;

export default function Member({ roleDetail, nickname, careerRange, tagList, memo }) {
  return (
    <div css={styleBox}>
      <MemberInfo roleDetail={roleDetail} nickname={nickname} careerRange={careerRange} />
      <TagList tagList={tagList} />
      <MemoBox memo={memo} />
    </div>
  );
}
