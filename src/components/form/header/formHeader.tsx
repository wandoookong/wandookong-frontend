import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export function FormHeader({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
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
    color: ${colors.grey900};
  }
`;
