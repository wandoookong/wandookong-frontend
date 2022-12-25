import { useEffect } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CommonModalHeader from "../../components/header/commonModalHeader";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById("id__google_onSignIn")) {
      const script = document.createElement("script");
      script.innerHTML = onSignIn.toString();
      script.async = true;
      document.body.appendChild(script);
      script.setAttribute("id", "id__google_onSignIn");

      const script2 = document.createElement("script");
      script2.src = "https://accounts.google.com/gsi/client";
      script2.async = true;
      script2.defer = true;
      document.body.appendChild(script2);
    }
  }, []);

  function onSignIn(googleUser) {
    const ACCESS_TOKEN_NAME = "w_d_k_t";
    fetch(`${process.env.REACT_APP_HOST_NAME}/api/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: googleUser.credential }),
    })
      .then((response) => response.json())
      .then(({ userSocialId, accessToken }) => {
        if (accessToken) {
          localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
          window.location.replace("/");
        } else if (userSocialId) {
          window.location.href = "/signUp?userSocialId=" + userSocialId;
        } else {
          throw new Error("no userSocialId, no accessToken.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("구글 로그인에 실패했습니다.");
      });
  }

  return (
    <>
      <CommonModalHeader onClick={() => navigate(-1)} />
      <ImageWrapper>
        <img src={Logo} alt="완두콩 로고" />
      </ImageWrapper>
      <div
        id="g_id_onload"
        data-client_id="572618992504-dm52b32m1e7pclkn3h9bm3ccksi0aqtc.apps.googleusercontent.com"
        data-callback="onSignIn"
        data-auto_prompt="false"
      />
      <div
        style={style}
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
        data-locale="ko_KR"
      />
      <Container>
        <a href="https://shared-fin-843.notion.site/c92dd8478738454fabf93fc7265916d9" rel="noreferrer" target="_blank">
          서비스 이용약관
        </a>
        <p>및</p>
        <a href="https://shared-fin-843.notion.site/3af247fe59404ef899c4eca033062835" rel="noreferrer" target="_blank">
          개인정보처리방침
        </a>
        <p>에 동의합니다.</p>
      </Container>
    </>
  );
}

const style = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "12px",
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 200px 0 220px;

  img {
    width: 150px;
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;

  a {
    margin-bottom: 12px;
    border: none;
    background: none;
    color: ${colors.grey600};
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    cursor: pointer;
  }
  p {
    color: ${colors.grey600};
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;
