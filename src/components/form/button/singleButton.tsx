import styled from "@emotion/styled";

interface Props {
  label: string;
  onClick(value?: any): void;
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
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 113px;
  background: #faf7eb;

  button {
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 42px;
    width: auto;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: ${(props) => (props.isActive ? "#47b561" : "#dddddd")};
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
  }
`;
