import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

export default function Navigation({ onClick }) {
  return (
    <Container>
      <CloseIcon sx={{ fontSize: 28 }} onClick={onClick} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 44px 0 36px 0;
`;
