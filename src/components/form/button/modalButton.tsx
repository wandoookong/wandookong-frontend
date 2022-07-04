import styled from "@emotion/styled";

const Button = styled.button`
  left: 20px;
  right: 20px;
  bottom: 20px;
  margin: 24px 0 0 0;
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 0;
  background: #47b561;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export function ModalButton({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>;
}
