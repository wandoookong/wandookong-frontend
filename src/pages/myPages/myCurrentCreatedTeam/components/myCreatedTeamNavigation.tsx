import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../../assets/icons/back.png";
import DeleteIcon from "../../../../assets/icons/delete.png";
import { colors } from "../../../../styles/colors";

export default function MyCreatedTeamNavigation({ onClickDelete }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Button iconUrl={BackIcon} onClick={() => navigate("/myAccount")} />
      <Button iconUrl={DeleteIcon} onClick={onClickDelete} />
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  min-width: 360px;
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 20px 24px;
  box-sizing: border-box;
  background: ${colors.background};
`;

const Button = styled.button<{ iconUrl: string }>`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent url(${(props) => props.iconUrl}) center / 100% no-repeat;
  cursor: pointer;
`;
