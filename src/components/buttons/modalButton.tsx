import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export function ModalButton({ prevLabel, nextLabel, onPrev, onNext }) {
  return (
    <Container>
      <button className="previous-button" onClick={onPrev}>
        {prevLabel}
      </button>
      <button className="next-button" onClick={onNext}>
        {nextLabel}
      </button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  margin-top: 18px;
  left: 20px;
  right: 20px;
  bottom: 21px;

  button.previous-button {
    flex: 1;
    width: 100%;
    height: 41px;
    margin-right: 8px;
    padding: 0;
    border-radius: 8px;
    border: 1px solid ${colors.grey200};
    background: ${colors.grey50};
    font-size: 14px;
    font-weight: 700;
    color: ${colors.grey600};
    cursor: pointer;
  }

  button.next-button {
    flex: 1;
    width: 100%;
    height: 41px;
    padding: 0;
    border-radius: 8px;
    border: 0;
    background: ${colors.brand900};
    font-size: 14px;
    font-weight: 700;
    color: ${colors.white};
    cursor: pointer;
  }
`;
