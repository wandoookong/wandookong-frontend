import styled from "@emotion/styled";

const Wrap = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding: 0 0 80px 0;
  h1 {
    margin: 0;
    font-family: Pretendard;
    font-size: 30px;
    line-height: 1.5;
    white-space: pre-line;
    color: #242c35;
  }
`;

export function Header({ title }) {
  return (
    <Wrap>
      <h1>{title}</h1>
    </Wrap>
  );
}
