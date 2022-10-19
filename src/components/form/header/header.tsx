import styled from "@emotion/styled";

export function Header({ title }) {
  return (
    <Wrap>
      <h1>{title}</h1>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding: 0 0 80px 0;
  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    white-space: pre-line;
    color: #242c35;
  }
`;
