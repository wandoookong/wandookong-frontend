import { useNavigate } from "react-router-dom";
import CommonModalHeader from "../../components/header/commonModalHeader";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export default function PrivacyTerms() {
  const navigate = useNavigate();
  return (
    <>
      <CommonModalHeader onClick={() => navigate(-1)} />
      <Container>
        <h1>개인정보처리방침</h1>
        <h2>제목</h2>
        <p>내용</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 80px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${colors.grey900};
  }

  h2 {
    margin-top: 24px;
    font-size: 20px;
    font-weight: 700;
    color: ${colors.grey900};
  }

  p {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.grey900};
  }
`;
