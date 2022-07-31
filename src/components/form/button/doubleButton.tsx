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
  border: 1px solid #47b561;
  background: #faf7eb;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
  color: #47b561;
`;

const NextButton = styled.button`
  flex: 1;
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 0;
  background: #47b561;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 113px;
`;

export function DoubleButton({ prevLabel, nextLabel, onPrevStep, onNextStep }) {
  return (
    <Container>
      <Wrap>
        <PrevButton onClick={onPrevStep}>{prevLabel}</PrevButton>
        <NextButton onClick={onNextStep}>{nextLabel}</NextButton>
      </Wrap>
    </Container>
  );
}
