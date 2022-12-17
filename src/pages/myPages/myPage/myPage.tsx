import React, { useEffect, useState } from "react";
import MyInfo from "./components/myInfo";
import MyOpenTeam from "./components/myOpenTeam";
import CommonModalHeader from "../../../components/header/commonModalHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { ACCESS_TOKEN_NAME } from "../../../api/config/config";
import { getUserMyInfoApi } from "../../../api/myPages/myPage/getUserMyInfoApi";
import { UserMyInfo } from "../../../@types/dto/userMyInfo";
import { getMyCreatedTeamApi } from "../../../api/myPages/myPage/getMyCreatedTeamApi";
import { MyCreatedTeam } from "../../../@types/dto/myCreatedTeam";

export default function MyPage() {
  const navigate = useNavigate();
  const [isFetchDone, setIsFetchDone] = useState(false);
  const [myOpenTeam, setMyOpenTeam] = useState<MyCreatedTeam>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
    currentTimestamp: 0,
    applyCount: 0,
    allowCount: 0,
    capacityCount: 0,
  });
  const [myInfo, setMyInfo] = useState<UserMyInfo>({
    email: "",
    nickname: "",
    roleMain: "design",
    careerRange: "0_4",
    tagList: [""],
  });

  const onClickLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    (async function () {
      const response = await Promise.all([getUserMyInfoApi(), getMyCreatedTeamApi()]);
      setMyInfo(response[0]);
      setMyOpenTeam(response[1]);
      setIsFetchDone(!isFetchDone);
    })();
  }, []);

  return (
    <>
      <CommonModalHeader onClick={() => navigate("/")} />
      <ContentWrapper>
        {!isFetchDone && <h1 className="loading-wrapper">불러오는 중입니다...</h1>}
        {isFetchDone && myInfo && (
          <MyInfo
            nickname={myInfo.nickname}
            email={myInfo.email}
            roleMain={myInfo.roleMain}
            careerRange={myInfo.careerRange}
            tagList={myInfo.tagList}
          />
        )}
        {isFetchDone && myOpenTeam && (
          <MyOpenTeam
            teamCategory={myOpenTeam.teamCategory}
            title={myOpenTeam.title}
            closeDueYmd={myOpenTeam.closeDueYmd}
            currentTimestamp={myOpenTeam.currentTimestamp}
            applyCount={myOpenTeam.applyCount}
            allowCount={myOpenTeam.allowCount}
            capacityCount={myOpenTeam.capacityCount}
          />
        )}
        {isFetchDone && (
          <ul className="menu-wrapper">
            <li>
              <button onClick={() => navigate("/my-team-history")}>내가 만든 완두콩 모두 보기</button>
            </li>
            <li>
              <button onClick={() => navigate("/my-team-party")}>참여한 완두콩 보기</button>
            </li>
          </ul>
        )}
        <section>
          <h1 className="menu-title">기타</h1>
          <ul className="menu-wrapper">
            <li>
              <button onClick={() => navigate("/terms")}>서비스 이용약관</button>
            </li>
            <li>
              <button onClick={() => navigate("/privacy-info")}>개인정보처리방침</button>
            </li>
            <li>
              <a href="mailto:wandookongproject@gmail.com">문의하기</a>
            </li>
            <li>
              <a href="#" target='_blank'>완두콩 팀 소개</a>
            </li>
            <li>
              <button onClick={onClickLogout}>로그아웃</button>
            </li>
          </ul>
        </section>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 0 60px 0;

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
