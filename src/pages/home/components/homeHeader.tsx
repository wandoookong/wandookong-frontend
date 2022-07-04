import styled from "@emotion/styled";

const Wrapper = styled.div`
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
  return (
    <Wrapper>
      <h1>완두콩</h1>
      <RightWrapper>
        <button>완두콩 만들기</button>
        <AlarmIcon />
        <MyPageIcon />
      </RightWrapper>
    </Wrapper>
  );
};
