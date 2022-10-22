/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import MyLink from "./MyLink";

const style = css`
  margin: 0 20px;
  margin-top: 29px;
  margin-bottom: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export default function MyPageEtc() {
  return (
    <>
      <div css={style}>기타</div>
      <MyLink link={"/terms"} title={"서비스 이용약관"} />
      <MyLink link={"/privacy-info"} title={"개인정보처리방침"} />
      <MyLink link={"mailto:wandookongproject@gmail.com"} title={"문의하기"} />
      <MyLink link={"/logout"} title={"로그아웃"} />
    </>
  );
}
