import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>문제가 발생했습니다.</h1>
      <button onClick={() => navigate("/")}>홈으로 가기</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 260px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors.grey900};
    text-align: center;
  }
  button {
    margin-top: 20px;
    padding: 12px;
    background: transparent;
    border: 1px solid ${colors.brand900};
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.brand900};
    cursor: pointer;
  }
`;
