import React from "react";
import GoogleLogin from "react-google-login";
import GoogleButton from "./components/googleButton";
import axios from "axios";
import { SingleButton } from "../../components/Form/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/sign-up");
  };

  const onSignIn = (response) => {
    console.log(response);
  };

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
      <SingleButton onClick={onClick} label="다음으로 건너뛰기" />
    </>
  );
}
