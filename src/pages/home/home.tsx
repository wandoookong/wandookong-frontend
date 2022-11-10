import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import FindTeamFilter from "./components/findTeamFilter";
import TeamItem from "./components/teamItem";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { TeamListReturnType } from "../../api/types/teamType";
import TeamApi from "../../api/teamApi";
import { isEmpty } from "../../@types/utility/typeGuard";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [teamData, setTeamData] = useState<TeamListReturnType>({ list: [] });
  const [findTeamFilters, setFindTeamFilters] = useState<TeamFilters>({
    roleDetail: "",
    teamCategory: "",
  });

  useEffect(() => {
    (async function () {
      const response = await TeamApi.getTeamList(location.search);
      setTeamData(response);
    })();
  }, [location]);

  return (
    <>
      <HomeHeader />
      <Container>
        <Carousel>
          <button onClick={() => navigate("/request")}>완두콩 만들기</button>
        </Carousel>
        <FindTeamFilter filters={findTeamFilters} setFilters={setFindTeamFilters} />
        {!isEmpty(teamData.list) ? (
          teamData.list.map((teamDataList, index) => (
            <TeamItem key={index} teamId={teamDataList.teamId} content={teamDataList} />
          ))
        ) : (
          <p>아직 만들어진 완두콩이 없습니다.</p>
        )}
      </Container>
    </>
  );
}

const Container = styled.main`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-y: hidden;

  p {
    margin-top: 80px;
    font-size: 14px;
    color: #999999;
    text-align: center;
  }
`;

const Carousel = styled.div`
  top: 0;
  width: 100%;
  height: 360px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
  padding: 280px 20px 20px 20px;
  box-sizing: border-box;

  button {
    margin: 0;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: #47b561;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }
`;
