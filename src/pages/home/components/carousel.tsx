import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
  padding: 20px;
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

export const Carousel = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate("/request")}>완두콩 만들기</button>
    </Wrapper>
  );
};
