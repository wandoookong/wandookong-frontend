import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate("/request")}>완두콩 만들기</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  height: 360px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
  padding: 280px 20px 20px 20px;
  box-sizing: border-box;

  button {
    margin: 0;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: #47b561;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }
`;
