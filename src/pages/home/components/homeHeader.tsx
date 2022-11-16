import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN_NAME } from "../../../api/config/config";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { colors } from "../../../styles/colors";
import { Nullable } from "../../../@types/utility/nullable";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const [isScrollOn, setIsScrollOn] = useState<boolean>(false);
  const [isToken, setIsToken] = useState<Nullable<string>>("");

  const handleScroll = () => {
    if (window.scrollY >= 220) {
      return setIsScrollOn(true);
    }
    return setIsScrollOn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_NAME);
    setIsToken(token);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container isScrollOn={isScrollOn}>
      <h1 onClick={() => navigate("/")}>완두콩</h1>
      <RightWrapper>
        {isScrollOn && <button onClick={() => navigate("/request")}>완두콩 만들기</button>}
        {isToken === null && <span onClick={() => navigate("/login")}>로그인</span>}
        {isToken !== null && <AccountIcon onClick={() => navigate("/my")} sx={{ fontSize: 24, ml: 2 }} />}
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div<{ isScrollOn: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  padding: 57px 20px 20px 20px;
  box-sizing: border-box;
  background: ${(props) =>
    props.isScrollOn
      ? "rgba(255, 255, 255, 0.1)"
      : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"};
  box-shadow: ${(props) => (props.isScrollOn ? "0 0 20px -4px rgba(0, 0, 0, 0.2)" : "none")};
  backdrop-filter: ${(props) => (props.isScrollOn ? "blur(150px)" : "none")};
  z-index: 900;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.grey900};
    cursor: pointer;
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
    background: ${colors.brand900};
    font-size: 14px;
    font-weight: 700;
    color: ${colors.white};
    cursor: pointer;
  }

  span {
    margin-left: 22px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.grey900};
    cursor: pointer;
  }
`;
