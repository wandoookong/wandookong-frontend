import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export default function InputValidationErrorMessage({ text }) {
  return <Message>{text}</Message>;
}

const Message = styled.p`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.red};
`;
