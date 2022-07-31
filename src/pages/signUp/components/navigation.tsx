import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 44px 0 36px 0;
`;

export default function Navigation({ onClick }) {
  return (
    <Wrapper>
      <CloseIcon sx={{ fontSize: 28 }} onClick={onClick} />
    </Wrapper>
  );
}
