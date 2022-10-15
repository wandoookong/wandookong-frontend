/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import MemberInfo from "../Member/MemberInfo";
import MemoBox from "../Member/MemoBox";
import TagList from "../Member/TagList";

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
