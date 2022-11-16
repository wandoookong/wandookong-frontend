import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../styles/colors";

export default function CommonModalHeader({ onClick }) {
  return (
    <Container>
      <CloseIcon sx={{ fontSize: 28 }} onClick={onClick} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 44px 20px 36px;
  box-sizing: border-box;
  background: ${colors.background};
  z-index: 50;
`;
