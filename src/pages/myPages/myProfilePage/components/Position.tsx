/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useState } from "react";
import { ROLE_MAIN } from "../../../../@types/model/fieldType";

const styleTitle = css`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8b8b8b;
  margin-bottom: 12px;
`;
const styleButtonWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const styleButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: none;
  width: 90px;
  height: 51px;
  border: 1.5px solid #afd89e;
  border-radius: 49px;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #242c35;
`;
const styleChecked = css`
  ${styleButton}
  background: #afd89e;
  border: 1.5px solid #639562;
  font-weight: 700;
`;

export default function Position({ roleMain, setRoleMain }: { roleMain: ROLE_MAIN; setRoleMain: any }) {
  const [roleMainNew, setRoleMainNew] = useState(roleMain);

  const onClick = (roleMain) => {
    setRoleMainNew(roleMain);
    setRoleMain(roleMain);
  };

  return (
    <section>
      <div css={styleTitle}>현재 포지션을 선택해주세요</div>
      <div css={styleButtonWrapper}>
        <button css={roleMainNew === "dev" ? styleChecked : styleButton} onClick={() => onClick("dev")}>
          개발자
        </button>
        <button css={roleMainNew === "design" ? styleChecked : styleButton} onClick={() => onClick("design")}>
          디자이너
        </button>
        <button css={roleMainNew === "pm" ? styleChecked : styleButton} onClick={() => onClick("pm")}>
          기획자
        </button>
      </div>
    </section>
  );
}
