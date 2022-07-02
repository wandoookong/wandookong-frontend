import React from "react";
import { Link } from "react-router-dom";

export default function GeneralNavigation() {
  return (
    <ul>
      <li>
        <Link to="/">완두콩</Link>
      </li>
      <li>
        <Link to="/request">완두콩 만들기</Link>
      </li>
      <li>
        <Link to="/login">로그인</Link>
      </li>
    </ul>
  );
}
