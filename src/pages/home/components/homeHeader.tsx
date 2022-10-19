import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 220) {
      return setScroll(true);
    }
    return setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container scroll={scroll}>
      <h1 onClick={() => navigate("/")}>완두콩</h1>
      <RightWrapper>
        {scroll && <button onClick={() => navigate("/request")}>완두콩 만들기</button>}
        <span onClick={() => navigate("/login")}>로그인</span>
        {/*{rest && (*/}
        {/*  <div>*/}
        {/*    <NotificationIcon onClick={() => navigate("/")} sx={{ fontSize: 24, ml: 2 }} />*/}
        {/*    <AccountIcon onClick={() => navigate("/login")} sx={{ fontSize: 24, ml: 2 }} />*/}
        {/*  </div>*/}
        {/*)}*/}
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div<{ scroll: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 57px 20px 20px 20px;
  z-index: 900;

  ${(props) => {
    if (!props.scroll) {
      return css`
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
      `;
    }
    return css`
      background: linear-gradient(180deg, #faf7eb 0.01%, rgba(250, 247, 235, 0.04) 95.83%);
      box-shadow: 0px -3px 10px rgba(199, 196, 186, 0.25);
      backdrop-filter: blur(150px);
    `;
  }}

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 92px;
    height: 29px;
    border: none;
    border-radius: 8px;
    background: #47b561;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }

  span {
    margin-left: 22px;
    font-size: 14px;
    font-weight: 700;
    color: #242c35;
  }
`;
