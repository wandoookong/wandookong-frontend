import React, { useEffect } from "react";
import GoogleLoginButton from "./components/googleLoginButton";

export default function Login() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <GoogleLoginButton />
    </>
  );
}
