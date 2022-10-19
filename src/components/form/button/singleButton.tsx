import styled from "@emotion/styled";

export function SingleButton({ label, onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>{label}</Button>
    </Container>
  );
}

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

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 113px;
  background: #faf7eb;
`;
