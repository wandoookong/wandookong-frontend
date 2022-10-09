/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import ApplyMemberInfo from "./ApplyMemberInfo";
import TagList from "./TagList";
import MemoBox from "./MemoBox";
import BottomButton from "./BottomButton";

const style = css`
  border-bottom: 1px solid #f0ebd8;
  margin: 0 20px;
  margin-top: 16px;
`;
const styleBox = css`
  background: #ffffff;
  border-radius: 8px;
`;

export default function ApplyMember() {
  return (
    <section css={style}>
      <div css={styleBox}>
        <ApplyMemberInfo />
        <TagList />
        <MemoBox />
      </div>
      <BottomButton />
    </section>
  );
}
