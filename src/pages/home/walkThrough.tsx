import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function WalkThrough({ onClick }) {
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={onClick}>닫기</button>
      <h1>Walkthrough</h1>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: darkolivegreen;
  z-index: 998;
`;
