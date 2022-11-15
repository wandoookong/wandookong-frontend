import styled from "@emotion/styled";
import { colors } from "../styles/colors";

interface Props {
  label: string;
  isActive: boolean;
  onClick(value?: any): void;
}

export function SingleButton({ label, onClick, isActive }: Props) {
  const onClickHandler = () => {
    if (isActive) {
      return onClick();
    }
    throw new Error();
  };

  return (
    <Container isActive={isActive}>
      <button onClick={onClickHandler}>{label}</button>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 113px;
  background: ${colors.background};

  button {
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 42px;
    width: auto;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: ${(props) => (props.isActive ? colors.brand900 : colors.grey100)};
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
  }
`;
