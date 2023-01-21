import React, { useEffect, useState } from "react";
import UserMyInfo from "./components/userMyInfo";
import MyCreatedTeam from "./components/myCreatedTeam";
import CommonModalHeader from "../../../components/header/commonModalHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { ACCESS_TOKEN_NAME } from "../../../api/config/config";
import { UserMyInfoType } from "../../../@types/dto/userMyInfoType";
import { MyCreatedTeamType } from "../../../@types/dto/myCreatedTeamType";
import { MyPageApi } from "../../../api/myPages/myPage/myPageApi";
import { MyPageMenuItemButton } from "../components/myPageMenuItemButton";

export default function MyPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [myCreatedTeam, setMyCreatedTeam] = useState<MyCreatedTeamType>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
    currentTimestamp: 0,
    applyCount: 0,
    allowCount: 0,
    capacityCount: 0,
  });
  const [userMyInfo, setUserMyInfo] = useState<UserMyInfoType>({
    email: "",
    nickname: "",
    roleMain: "design",
    careerRange: "0_4",
    tagList: [""],
  });

  const onLogOut = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    (async function () {
      const response = await MyPageApi();
      if (!response.success) {
        alert(response.message);
      }
      setUserMyInfo(response.userMyInfo);
      setMyCreatedTeam(response.myCreatedTeam);
      setIsLoading(!isLoading);
    })();
  }, []);

  return (
    <>
      <CommonModalHeader onClick={() => navigate("/")} />
      <ContentWrapper>
        {isLoading && <h1 className="loading-wrapper">불러오는 중입니다...</h1>}
        {!isLoading && userMyInfo && (
          <UserMyInfo
            nickname={userMyInfo.nickname}
            email={userMyInfo.email}
            roleMain={userMyInfo.roleMain}
            careerRange={userMyInfo.careerRange}
            tagList={userMyInfo.tagList}
          />
        )}
        {!isLoading && myCreatedTeam && (
          <MyCreatedTeam
            teamCategory={myCreatedTeam.teamCategory}
            title={myCreatedTeam.title}
            closeDueYmd={myCreatedTeam.closeDueYmd}
            currentTimestamp={myCreatedTeam.currentTimestamp}
            applyCount={myCreatedTeam.applyCount}
            allowCount={myCreatedTeam.allowCount}
            capacityCount={myCreatedTeam.capacityCount}
          />
        )}
        {!isLoading && (
          <ul className="menu-wrapper">
            <MyPageMenuItemButton label="내가 만든 완두콩 모두 보기" onClick={() => navigate("/my-team-history")} />
            <li>
              <button onClick={() => navigate("/my-team-party")}>참여한 완두콩 보기</button>
            </li>
          </ul>
        )}
        <section>
          <h1 className="menu-title">기타</h1>
          <ul className="menu-wrapper">
            <li>
              <button onClick={() => (window.location.href = "/terms")}>서비스 이용약관</button>
            </li>
            <li>
              <button onClick={() => (window.location.href = "/privacy")}>개인정보처리방침</button>
            </li>
            <li>
              <a href="mailto:wandookongproject@gmail.com">문의하기</a>
            </li>
            <li>
              <a
                href="https://wandookong.notion.site/b87cf3a1417f4b748bcbc755755a50be"
                target="_blank"
                rel="noreferrer"
              >
                완두콩 팀 소개
              </a>
            </li>
            <li>
              <button onClick={onLogOut}>로그아웃</button>
            </li>
          </ul>
        </section>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 0 60px 0;
  padding-bottom: 60px;

  h1.loading-wrapper {
    width: 100%;
    padding: 0 20px 32px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: ${colors.grey900};
  }

  h1.menu-title {
    margin: 0 20px 22px;
    padding: 29px 0 0;
    border-top: 1px solid ${colors.subBrand50};
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.grey900};
  }

  ul.menu-wrapper {
    padding: 0 20px;

    li {
      margin-bottom: 31px;

      button {
        display: block;
        width: 100%;
        padding: 0;
        border: none;
        background: transparent;
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grey900};
        cursor: pointer;
      }

      a {
        display: block;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grey900};
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;
