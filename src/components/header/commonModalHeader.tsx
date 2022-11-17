import styled from "@emotion/styled";
import CloseIcon from "../../assets/icons/close-grey900.svg";
import { colors } from "../../styles/colors";

interface Props {
  onClick(): void;
}

export default function CommonModalHeader({ onClick }: Props) {
  return (
    <Container>
      <button onClick={onClick} />
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 44px 20px 36px;
  box-sizing: border-box;
  background: ${colors.background};
  z-index: 50;

  button {
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: transparent url(${CloseIcon}) center / 100% no-repeat;
    cursor: pointer;
  }
`;
