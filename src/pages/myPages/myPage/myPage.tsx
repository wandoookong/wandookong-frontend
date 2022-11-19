import React, { useEffect, useState } from "react";
import MyInfo from "./components/myInfo";
import MyOpenTeam from "./components/myOpenTeam";
import UserApi from "../../../api/userApi";
import { UserMyInfo } from "../../../api/types/userType";
import MyTeamApi from "../../../api/myTeamApi";
import { CurrentOpenTeamReturnType } from "../../../api/types/teamType";
import CommonModalHeader from "../../../components/header/commonModalHeader";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export default function MyPage() {
  const navigate = useNavigate();
  const [myOpenTeam, setMyOpenTeam] = useState<CurrentOpenTeamReturnType>({
    teamId: 1,
    teamCategory: "portfolio",
    title: "",
    closeDueYmd: "",
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

  useEffect(() => {
    (async function () {
      const response = await UserApi.getUserMe();
      setMyInfo(response);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await MyTeamApi.getCurrentOpenTeam();
      setMyOpenTeam(response);
    })();
  }, []);

  return (
    <>
      <CommonModalHeader onClick={() => navigate("/")} />
      <ContentWrapper>
        {!myInfo && <h1 className="loading-wrapper">로그인 정보를 불러오는 중입니다...</h1>}
        {myInfo && (
          <MyInfo
            nickname={myInfo.nickname}
            email={myInfo.email}
            roleMain={myInfo.roleMain}
            careerRange={myInfo.careerRange}
            tagList={myInfo.tagList}
          />
        )}
        {myOpenTeam && (
          <MyOpenTeam
            teamCategory={myOpenTeam.teamCategory}
            title={myOpenTeam.title}
            closeDueYmd={myOpenTeam.closeDueYmd}
            applyCount={myOpenTeam.applyCount}
            allowCount={myOpenTeam.allowCount}
            capacityCount={myOpenTeam.capacityCount}
          />
        )}
        <ul className="menu-wrapper">
          <li>
            <button onClick={() => navigate("/my-team-history")}>내가 만든 완두콩 모두 보기</button>
          </li>
          <li>
            <button onClick={() => navigate("/my-team-party")}>참여한 완두콩 보기</button>
          </li>
        </ul>
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
              <button onClick={() => navigate("/logout")}>로그아웃</button>
            </li>
          </ul>
        </section>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin: 108px 0 60px 0;

  h1.loading-wrapper {
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
