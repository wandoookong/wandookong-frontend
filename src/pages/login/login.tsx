import React, { useEffect } from "react";
import GoogleLoginButton from "./components/googleLoginButton";

export default function Login() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    // script.src = "https://apis.google.com/js/platform.js";
    script.async = true;

    const meta = document.createElement("meta");
    meta.name = "google-signin-client_id";
    meta.content = "572618992504-dm52b32m1e7pclkn3h9bm3ccksi0aqtc.apps.googleusercontent.com";

    document.head.appendChild(meta);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(meta);
      document.body.removeChild(script);
    };
  }, []);

  function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  // function handleCredentialResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }
  // window.onload = function () {
  //   google.accounts.id.initialize({
  //     client_id: "YOUR_GOOGLE_CLIENT_ID",
  //     callback: handleCredentialResponse,
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     { theme: "outline", size: "large" }, // customization attributes
  //   );
  //   google.accounts.id.prompt(); // also display the One Tap dialog
  // };

  return (
    <>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </>
  );
}
