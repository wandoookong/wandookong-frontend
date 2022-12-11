import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import CloseIcon from "../../assets/icons/close-grey900.svg";
import { colors } from "../../styles/colors";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <Container>
      <header>
        <button onClick={() => navigate(-1)} />
      </header>
      <div>
        <h1>서비스 이용약관</h1>
        <strong>제1조(목적)</strong>
        <p>
          산타파이브의 서비스를 이용해주셔서 감사합니다. 이 약관은 완두콩(이하 “회사”)가 운영하는 인터넷 사이트 내
          트리를 꾸며줘!(이하 “사이트”)를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로
          합니다.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  header {
    display: flex;
    justify-content: flex-end;
    padding: 40px 20px 24px;

    button {
      width: 24px;
      height: 24px;
      background: transparent url(${CloseIcon}) center / 100% no-repeat;
      border: none;
    }
  }
  div {
    padding: 0 20px 80px;

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
  }
`;
