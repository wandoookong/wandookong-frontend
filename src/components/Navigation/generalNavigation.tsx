import React from "react";
import { Link } from "react-router-dom";

export default function GeneralNavigation() {
  return (
    <>
      <div>완두콩</div>
      <Link to="/request">완두콩 만들기</Link>
      <div>로그인</div>
    </>
  );
}
