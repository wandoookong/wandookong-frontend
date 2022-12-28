import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN_NAME } from "../../../api/config/config";
import { colors } from "../../../styles/colors";
import AccountIcon from "../../../assets/icons/account.svg";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { Nullable } from "../../../@types/utility/nullable";
import Logo from "../../../assets/images/logo.png";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const [isScrollOn, setIsScrollOn] = useState(false);
  const token: Nullable<string> = localStorage.getItem(ACCESS_TOKEN_NAME);

  const handleScroll = () => {
    if (window.scrollY >= 220) {
      return setIsScrollOn(true);
    }
    return setIsScrollOn(false);
  };

  const onClickLogin = () => {
    if (!token) {
      navigate("/login");
      return window.location.reload();
    }
    return navigate("/myAccount");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container isScrollOn={isScrollOn}>
      <button className="logo" onClick={() => window.location.reload()} />
      <RightWrapper>
        {isScrollOn && (
          <button className="set-team-button" onClick={() => navigate("/request")}>
            완두콩 만들기
          </button>
        )}
        {token === null && <span onClick={onClickLogin}>로그인</span>}
        {!isEmpty(token) && token !== null && (
          <button className="my-home-button" onClick={() => navigate("/myAccount")} />
        )}
      </RightWrapper>
    </Container>
  );
};

const Container = styled.nav<{ isScrollOn: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  min-width: 360px;
  max-width: 480px;
  padding: 57px 20px 20px 20px;
  box-sizing: border-box;
  background: ${(props) =>
    props.isScrollOn
      ? "rgba(255, 255, 255, 0.1)"
      : "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 90%)"};
  box-shadow: ${(props) => (props.isScrollOn ? "0 0 20px -4px rgba(0, 0, 0, 0.2)" : "none")};
  backdrop-filter: ${(props) => (props.isScrollOn ? "blur(150px)" : "none")};
  z-index: 900;

  button.logo {
    margin: 0;
    width: 64px;
    height: 24px;
    border: none;
    background: transparent url(${Logo}) center / 100% no-repeat;
    cursor: pointer;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button.set-team-button {
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

  button.my-home-button {
    margin-left: 22px;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent url(${AccountIcon}) center / 100% no-repeat;
    cursor: pointer;
  }
`;
