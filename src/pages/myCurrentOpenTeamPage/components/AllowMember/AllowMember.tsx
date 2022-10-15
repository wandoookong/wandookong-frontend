/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { AllowMemberContainerContext } from "../../AllowMemberContainer";
import Member from "../Member/Member";
import BottomButton from "./BottomButton";

const style = css`
  border-bottom: 1px solid #f0ebd8;
  margin: 0 20px;
  margin-top: 16px;
`;

export default function ApplyMember() {
  const { allowMember } = useContext(AllowMemberContainerContext);

  return (
    <section css={style}>
      <Member {...allowMember} />
      <BottomButton />
    </section>
  );
}
