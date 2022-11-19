import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  margin-top: 18px;
  left: 20px;
  right: 20px;
  bottom: 21px;
`;

const PrevButton = styled.button`
  flex: 1;
  width: 100%;
  height: 41px;
  margin-right: 8px;
  border-radius: 8px;
  border: 1px solid #a7a7a7;
  background: #f2f2f1;
  font-size: 14px;
  font-weight: 700;
  color: #434445;
  cursor: pointer;
`;

const NextButton = styled.button`
  flex: 1;
  width: 100%;
  height: 41px;
  border-radius: 8px;
  border: 0;
  background: #47b561;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

export function ModalButton({ prevLabel, nextLabel, onPrev, onNext }) {
  return (
    <Wrapper>
      <PrevButton onClick={onPrev}>{prevLabel}</PrevButton>
      <NextButton onClick={onNext}>{nextLabel}</NextButton>
    </Wrapper>
  );
}
