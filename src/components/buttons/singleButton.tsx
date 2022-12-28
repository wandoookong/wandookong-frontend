import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

interface Props {
  label: string;
  onClick(value?: any): void;

  /**
   * 버튼의 활성화 여부
   */
  isActive: boolean;
}

export function SingleButton({ label, onClick, isActive }: Props) {
  const onClickHandler = () => {
    if (isActive) {
      return onClick();
    }
  };

  return (
    <Container isActive={isActive}>
      <button onClick={onClickHandler}>{label}</button>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 360px;
  max-width: 480px;
  height: 113px;
  padding: 20px 20px 0;
  box-sizing: border-box;
  background: ${colors.background};

  button {
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 12px;
    background: ${(props) => (props.isActive ? colors.brand900 : colors.grey100)};
    color: ${(props) => (props.isActive ? colors.white : colors.grey300)};
    font-size: 16px;
    font-weight: 700;
    cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  }
`;
