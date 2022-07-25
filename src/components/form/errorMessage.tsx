import styled from "@emotion/styled";

export default function ErrorMessage({ text }) {
  const Message = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #f47026;
  `;
  return <Message>{text}</Message>;
}
