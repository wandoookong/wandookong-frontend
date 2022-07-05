import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: auto;
  padding: 57px 20px 0 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    width: 92px;
    height: 29px;
    border: none;
    border-radius: 8px;
    background: #47b561;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
`;

const AlarmIcon = styled.div`
  margin-left: 20px;
  width: 24px;
  height: 24px;
  background: red;
`;
const MyPageIcon = styled.div`
  margin-left: 20px;
  width: 24px;
  height: 24px;
  background: blue;
`;

export const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentWrapper>
        <h1 onClick={() => navigate("/")}>완두콩</h1>
        <RightWrapper>
          <button onClick={() => navigate("/request")}>완두콩 만들기</button>
          <AlarmIcon onClick={() => navigate("/")} />
          <MyPageIcon onClick={() => navigate("/")} />
        </RightWrapper>
      </ContentWrapper>
    </Container>
  );
};
