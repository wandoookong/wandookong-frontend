import styled from "@emotion/styled";

export function SingleButton({ label, onClick }) {
  const Button = styled.button`
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 20px;
    width: auto;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: #41df09;
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  `;

  return <Button onClick={onClick}>{label}</Button>;
}

export function DoubleButton({ prevLabel, nextLabel, onPrevStep, onNextStep }) {
  const Wrap = styled.div`
    display: flex;
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
  `;

  const PrevButton = styled.button`
    flex: 1;
    width: 100%;
    height: 52px;
    margin-right: 8px;
    border-radius: 12px;
    border: 0;
    background: #ccc;
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  `;

  const NextButton = styled.button`
    flex: 1;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: #41df09;
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  `;

  return (
    <Wrap>
      <PrevButton onClick={onPrevStep}>{prevLabel}</PrevButton>
      <NextButton onClick={onNextStep}>{nextLabel}</NextButton>
    </Wrap>
  );
}
