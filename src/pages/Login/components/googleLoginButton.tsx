import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    // try {
    //     const response = await axios.post("https://wandookongproject.com/api/auth/google", {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             credential: response.credential,
    //         }),
    //     });
    //     navigate("/sign-up");
    // } catch(error) {console.error(error)}
  };

  // const handleCredentialResponse = (value) => {
  console.log("a");
  // };

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
    </>
  );
}
