import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 42px;
`;

const PrevButton = styled.button`
  flex: 1;
  width: 100%;
  height: 52px;
  margin-right: 18px;
  border-radius: 12px;
  border: 2px solid #ccc;
  background: #fff;
  // box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

const NextButton = styled.button`
  flex: 1;
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 0;
  background: #47b561;
  // box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export function DoubleButton({ prevLabel, nextLabel, onPrevStep, onNextStep }) {
  return (
    <Wrap>
      <PrevButton onClick={onPrevStep}>{prevLabel}</PrevButton>
      <NextButton onClick={onNextStep}>{nextLabel}</NextButton>
    </Wrap>
  );
}
