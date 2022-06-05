import styled from "@emotion/styled";

export default function Button() {
  const Wrap = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: 72px;
    padding: 10px 20px 0;
    background: #ffffff;
    box-shadow: 0 -4px 12px 2px rgba(0, 0, 0, 0.1);
  `;
  const Button = styled.button`
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: #41df09;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  `;
  return (
    <Wrap>
      <Button>다음</Button>
    </Wrap>
  );
}
