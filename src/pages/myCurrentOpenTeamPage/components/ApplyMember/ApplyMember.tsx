/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import BottomButton from "./BottomButton";
import { useContext } from "react";
import { ApplyMemberContainerContext } from "../../ApplyMemberContainer";
import Member from "../Member/Member";

const style = css`
  border-bottom: 1px solid #f0ebd8;
  margin: 0;
  margin-top: 16px;
`;

export default function ApplyMember() {
  const { applyMember } = useContext(ApplyMemberContainerContext);

  return (
    <section css={style}>
      <Member {...applyMember} />
      <BottomButton />
    </section>
  );
}
