/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useState } from "react";
import { CAREER_RANGE } from "../../../api/types/fieldType";

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

export default function CareerRange({
  careerRange,
  setCareerRange,
}: {
  careerRange: CAREER_RANGE;
  setCareerRange: any;
}) {
  const [careerRangeNew, setCareerRangeNew] = useState(careerRange);

  const onClick = (careerRange: CAREER_RANGE) => {
    setCareerRangeNew(careerRange);
    setCareerRange(careerRange);
  };

  return (
    <section>
      <div css={styleTitle}>년차를 선택해주세요</div>
      <div css={styleButtonWrapper}>
        <button css={careerRangeNew === "0_4" ? styleChecked : styleButton} onClick={() => onClick("0_4")}>
          0~4년
        </button>
        <button css={careerRangeNew === "4_10" ? styleChecked : styleButton} onClick={() => onClick("4_10")}>
          4~10년
        </button>
        <button css={careerRangeNew === "10_100" ? styleChecked : styleButton} onClick={() => onClick("10_100")}>
          10년 이상
        </button>
      </div>
    </section>
  );
}
