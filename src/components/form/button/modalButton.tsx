import styled from "@emotion/styled";
const Wrapper = styled.div`
  display: flex;
  margin-top: 18px;
  left: 20px;
  right: 20px;
`;

const PrevButton = styled.button`
  flex: 1;
  width: 100%;
  height: 41px;
  margin-right: 8px;
  border-radius: 8px;
  border: 1px solid #a7a7a7;
  background: #f2f2f1;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #434445;
`;

const NextButton = styled.button`
  flex: 1;
  width: 100%;
  height: 41px;
  border-radius: 8px;
  border: 0;
  background: #47b561;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;

export function ModalButton({ prevLabel, nextLabel, onPrev, onNext }) {
  return (
    <Wrapper>
      <PrevButton onClick={onPrev}>{prevLabel}</PrevButton>
      <NextButton onClick={onNext}>{nextLabel}</NextButton>
    </Wrapper>
  );
}
