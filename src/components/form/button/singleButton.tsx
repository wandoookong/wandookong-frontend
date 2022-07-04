import styled from "@emotion/styled";

const Button = styled.button`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 42px;
  width: auto;
  height: 52px;
  border-radius: 12px;
  border: 0;
  background: #47b561;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export function SingleButton({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>;
}
