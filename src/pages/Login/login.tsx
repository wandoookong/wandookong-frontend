import React from "react";
import { useNavigate } from "react-router-dom";
import { SingleButton } from "../../components/form/button/singleButton";

export default function Login() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/sign-up");
  };

  window["handleCredentialResponse"] = (response) => {
    console.log(response);
  };

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="572618992504-dm52b32m1e7pclkn3h9bm3ccksi0aqtc.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
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
        data-callback="onSignIn"
        data-locale="ko_KR"
      />
      <SingleButton onClick={onClick} label="다음으로 건너뛰기" />
    </>
  );
}
