import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  message: string;
  buttonLabel?: string;
}

export default function ToastPopUp({ message, buttonLabel }: Props) {
  return (
    <Container>
      <p>{message}</p>
      <button>{buttonLabel}</button>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  left: 20px;
  right: 20px;
  bottom: 40px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  background: ${colors.brand300};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: ${colors.grey900};

  button {
    font-weight: 700;
    border: none;
    background: transparent;
  }
`;
