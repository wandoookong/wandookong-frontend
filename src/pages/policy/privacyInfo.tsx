import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close-grey900.svg";
import { colors } from "../../styles/colors";
import styled from "@emotion/styled";

export default function PrivacyInfo() {
  const navigate = useNavigate();

  return (
    <Container>
      <header>
        <button onClick={() => navigate(-1)} />
      </header>
      <div>
        <h1>개인정보처리방침</h1>
        <strong>제1조(목적)</strong>
        <p>
          이 약관은 완두콩(이하 “회사”)가 운영하는 인터넷 사이트 완두콩 (이하 “사이트”)를 이용함에 있어 회사와 이용자의
          권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <strong>제1조(목적)</strong>
        <p>
          이 약관은 완두콩(이하 “회사”)가 운영하는 인터넷 사이트 완두콩 (이하 “사이트”)를 이용함에 있어 회사와 이용자의
          권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 44px 20px 24px;
    background: ${colors.background};
    box-sizing: border-box;

    button {
      width: 24px;
      height: 24px;
      background: transparent url(${CloseIcon}) center / 100% no-repeat;
      border: none;
      cursor: pointer;
    }
  }
  div {
    padding: 92px 20px 80px;
    overflow-x: hidden;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 700;
      color: ${colors.grey900};
    }

    strong {
      display: block;
      margin-bottom: 12px;
      font-weight: 700;
      color: ${colors.grey900};
    }

    p {
      margin-bottom: 12px;
      color: ${colors.grey900};
      line-height: 20px;
    }
  }
`;
