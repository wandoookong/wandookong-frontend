/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const styleSection = css`
  margin: 0 20px;
  margin-top: 9px;
  display: flex;
  justify-content: space-around;

  button {
  }
`;
const styleButton = css`
  width: 100%;
  padding: 6px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b8b8b;
  background: none;
  border: 0;
  cursor: pointer;
  border-bottom: 1.5px solid #f0ebd8;
`;
const styleActive = css`
  ${styleButton}
  color: #242c35;
  border-bottom: 3px solid #47b561;
`;

export default function TabBar({ pageMode, onClickTab }) {
  return (
    <section css={styleSection}>
      <button css={pageMode === "apply" ? styleActive : styleButton} onClick={(e) => onClickTab(e, "apply")}>
        신청자
      </button>
      <button css={pageMode === "allow" ? styleActive : styleButton} onClick={(e) => onClickTab(e, "allow")}>
        참여자
      </button>
    </section>
  );
}
