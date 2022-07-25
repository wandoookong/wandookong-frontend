import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  padding: 16px 12px;
  background: #fff;
  border-radius: 8px;
  div {
    p {
      font-size: 12px;
      color: #3f3f3f;
    }
    h2 {
      font-size: 16px;
      margin: 0;
    }
  }
`;

const DayCounter = styled.p`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #f47026;
`;

const RuleWrapper = styled.div`
  display: flex;
  margin: 12px 0 0 0;
  p {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;
const RuleContent = styled.div`
  margin-right: 14px;
`;

const RuleImage = styled.div`
  width: 48px;
  height: 48px;
  background: #d3eef5;
  border-radius: 28px;
  p {
    white-space: nowrap;
  }
`;

export default function RequestItem({ position }) {
  return (
    <Wrapper>
      <div>
        <p>포트폴리오</p>
        <h2>제목</h2>
      </div>
      <DayCounter>D-6</DayCounter>
      <RuleWrapper>
        {position.map((rule) => (
          <RuleContent key={rule.id}>
            <RuleImage />
            <p>{rule.label}</p>
          </RuleContent>
        ))}
      </RuleWrapper>
    </Wrapper>
  );
}
