import React from "react";
import styled from "@emotion/styled";
// import googleIconPath from "./assets/google-icon.png";

const Button = styled.button`
  position: fixed;
  left: 20px;
  right: 20px;
  height: 52px;
  padding: 10px;
  background: #ffffff;
  border: 2px solid #d8d9de;
  border-radius: 8px;
  text-align: center;
  img {
  width: 18px;
  height: 18px;
  margin: 0 12px 0 0;
`;

export default function GoogleButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <div>
        {/*<img alt="Google Logo" src={googleIconPath} />*/}
        Google 계정으로 시작하기
      </div>
    </Button>
  );
}
