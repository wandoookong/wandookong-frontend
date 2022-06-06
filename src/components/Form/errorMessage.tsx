import styled from "@emotion/styled";

export default function ErrorMessage({ text }) {
  const Message = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #ff334b;
  `;
  return <Message>{text}</Message>;
}
