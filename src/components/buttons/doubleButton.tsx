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
      <div className="double-button-wrapper">
        <button className="prev-button" onClick={onPrevStep}>
          {prevButtonLabel}
        </button>
        <button className="next-button" onClick={onNextStep}>
          {nextButtonLabel}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 360px;
  max-width: 480px;
  height: 113px;
  padding: 20px 20px 0;
  box-sizing: border-box;
  background: ${colors.background};

  div.double-button-wrapper {
    display: flex;

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
  }
`;
