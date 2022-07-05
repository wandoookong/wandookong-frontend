import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  div {
    p {
      font-size: 12px;
      color: #3f3f3f;
    }
    h2 {
      font-size: 16px;
    }
  }
`;

export default function RequestItem() {
  return (
    <Wrapper>
      <div>
        <p>포트폴리오</p>
        <h2>제목</h2>
      </div>
      <p>D-6</p>
    </Wrapper>
  );
}
