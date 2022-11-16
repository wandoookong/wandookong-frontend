import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { isEmpty } from "../../../@types/utility/typeGuard";

interface Props {
  title: string;
  errorMessage?: string;
  description?: string;
}

export function FormHeader({ title, errorMessage, description }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
      {!isEmpty(errorMessage) && <p>{errorMessage}</p>}
      {!isEmpty(description) && <p className="description">{description}</p>}
    </Container>
  );
}

const Container = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    white-space: pre-line;
    color: ${colors.grey900};
  }

  p {
    margin-top: 13px;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.red};
  }

  p.description {
    margin: 12px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: #8b8b8b;
  }
`;
