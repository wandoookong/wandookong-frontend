import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  message: string;
  isActive: boolean;
}

export default function ToastPopUp({ message, isActive }: Props) {
  return (
    <Container isActive={isActive}>
      <p>{message}</p>
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
  padding: 16px 12px;
  border-radius: 10px;
  background: ${colors.brand300};
  box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.2);
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: ${colors.grey900};
  opacity: 0;
  animation: ${(props) => (props.isActive ? "fadeInOut 2.8s ease-in-out" : "none")};

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 100%;
    }
    85% {
      opacity: 80%;
    }
    100% {
      opacity: 0;
    }
  }
`;
