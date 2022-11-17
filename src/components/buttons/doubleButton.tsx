import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

interface Props {
  prevButtonLabel: string;
  nextButtonLabel: string;
  onPrevStep(): void;
  onNextStep(): void;
}

export function DoubleButton({ prevButtonLabel, nextButtonLabel, onPrevStep, onNextStep }: Props) {
  return (
    <Container>
      <ButtonWrapper>
        <button className="prev-button" onClick={onPrevStep}>
          {prevButtonLabel}
        </button>
        <button className="next-button" onClick={onNextStep}>
          {nextButtonLabel}
        </button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 113px;
  background: ${colors.background};
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 42px;

  button.prev-button {
    flex: 1;
    width: 100%;
    height: 52px;
    margin-right: 18px;
    border-radius: 12px;
    border: 1px solid ${colors.brand900};
    background: ${colors.background};
    font-size: 16px;
    font-weight: bold;
    color: ${colors.brand900};
    cursor: pointer;
  }

  button.next-button {
    flex: 1;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: ${colors.brand900};
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
  }
`;
