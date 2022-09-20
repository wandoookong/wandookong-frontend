import { useEffect } from "react";

export default function Login() {
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

  // global로 넣어줘야 해서, module에 있는 함수를 사용할 수가 없네요. ㅠㅠ
  // script tag도 동적으로 만들어줘야 하고, 이게 더 간단할줄 알았더니 더 번거로워졌어요.
  function onSignIn(googleUser) {
    // import 오류가 나서 여기서 다시 정의합니다. ㅠㅠ
    const ACCESS_TOKEN_NAME = "w_d_k_t";

    fetch(`${process.env.REACT_APP_HOST_NAME}/api/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: googleUser.credential }),
    })
      .then((response) => response.json())
      .then(({ userSocialId, accessToken }) => {
        // TODO: console.log 찍은건 개발 완료 후 삭제 예정
        console.log(userSocialId, accessToken);
        if (accessToken) {
          // login success
          console.log("login success");
          // 로그인 여부 체크 및 authorization header에서 사용하기 위한 용도로 token을 저장합니다.
          localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
          console.log(localStorage.getItem(ACCESS_TOKEN_NAME));
          // 로그인이 완료됐으니, 원래 page로 돌아갑니다!
          window.history.back();
        } else if (userSocialId) {
          // new user
          console.log("new user");
          // 회원가입 페이지로 이동합니다.
          window.location.href = "/signUp";
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
      <div
        id="g_id_onload"
        data-client_id="572618992504-dm52b32m1e7pclkn3h9bm3ccksi0aqtc.apps.googleusercontent.com"
        data-callback="onSignIn"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
        data-locale="ko_KR"
      />
    </>
  );
}
