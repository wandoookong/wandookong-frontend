import { useNavigate } from "react-router-dom";
import { SingleButton } from "../../components/form/button/singleButton";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";

export default function ApplyTeam() {
  const navigate = useNavigate();
  const onClick = () => {};

  return (
    <>
      <HeaderWrap>
        <CloseIcon sx={{ fontSize: 28 }} onClick={() => navigate(-1)} />
      </HeaderWrap>
      <ContentWrapper>
        <h1>이페이지</h1>
      </ContentWrapper>
      <SingleButton label="참여하기" onClick={onClick} />
    </>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 44px 12px 20px;
  box-sizing: border-box;
  background: rgba(250, 247, 235, 1);
`;

const ContentWrapper = styled.div`
  padding-top: 92px;
`;
